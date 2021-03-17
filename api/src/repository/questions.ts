import {
  GameQuestion,
  QuestionEntity,
} from "../schemas/questions/questionTypeDefs";
import { pool } from "./db";

export async function getQuestions(
  userId: number
): Promise<Array<QuestionEntity>> {
  const client = await pool.connect();
  const result = await client.query(
    `SELECT * from questions 
     where "createdBy" = $1
     order by "createdAtUtc" desc`,
    [userId]
  );
  await client.release();
  return result.rows;
}

export async function addQuestion(
  question: Partial<QuestionEntity>
): Promise<QuestionEntity> {
  const client = await pool.connect();
  const result = await client.query(
    'insert into questions("content", "createdBy") values ($1, $2) returning *',
    [question.content, question.createdBy]
  );

  await client.release();
  return result.rows[0];
}

export async function deleteQuestion(
  id: number,
  currentUserId: number
): Promise<boolean> {
  const client = await pool.connect();
  const result = await client.query(
    `delete from questions where id = $1 and "createdBy" = $2`,
    [id, currentUserId]
  );
  await client.release();
  return result.rowCount > 0;
}

export async function getRandomQuestion(): Promise<GameQuestion> {
  const client = await pool.connect();
  const result = await client.query(
    `select q.id, q.content, q."createdAtUtc" from questions q
     inner join users u on q."createdBy" = u.id
     left join completed_questions cq on q.id = cq."questionId"
     where "questionId" is null`
  );
  const question = result.rows[0];
  if (question) {
    await client.query(
      `insert into completed_questions("questionId")
       values ($1)`,
      [question.id]
    );
  }
  await client.release();

  return question;
}
