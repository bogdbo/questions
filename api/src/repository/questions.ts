import { GameQuestion, QuestionEntity, } from '../schemas/questions/questionTypeDefs';
import { expand } from '../utilities';
import { pool } from './db';

export async function getQuestions(
  userId: number
): Promise<Array<QuestionEntity>> {
  const client = await pool.connect();
  const result = await client.query(
    `SELECT *
     from questions
     where "createdBy" = $1
     order by "createdAtUtc" desc`,
    [userId]
  );
  await client.release();
  return result.rows;
}

export async function addQuestions(
  questions: Array<Partial<QuestionEntity>>
): Promise<Array<QuestionEntity>> {
  const client = await pool.connect();

  const values = questions.map((q) => [q.content, q.createdBy]).flat();

  const result = await client.query(
    `insert into questions("content", "createdBy") values ${expand(
      questions
    )} returning *`,
    values
  );

  await client.release();
  return result.rows;
}

export async function deleteQuestion(
  id: number,
  currentUserId: number
): Promise<boolean> {
  const client = await pool.connect();
  const result = await client.query(
    `delete
     from questions
     where id = $1
       and "createdBy" = $2`,
    [id, currentUserId]
  );
  await client.release();
  return result.rowCount > 0;
}

export async function completeQuestion(
  currentUserId: number,
  questionId: number
) {
  const client = await pool.connect();
  await client.query(
    `insert into completed_questions("questionId", "completedBy")
       values ($1, $2)`,
    [questionId, currentUserId]
  );
  client.release();
}

export async function getRandomQuestion(): Promise<GameQuestion> {
  const client = await pool.connect();
  const result = await client.query(
    `with filtered_questions as (
        select q.id, q.content, u.name as "createdByName", q."createdAtUtc"
        from questions q
                 inner join users u on q."createdBy" = u.id
                 left join completed_questions cq on q.id = cq."questionId"
        where "questionId" is null)
     SELECT *
     FROM filtered_questions
     offset floor(random() * (select count(*) from filtered_questions)) limit 1
    `
  );

  await client.release();
  return result.rows[0];
}
