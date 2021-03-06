import { gql, useLazyQuery } from "@apollo/client";
import { Fab, Fade, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Centered } from "../components/Centered";
import { ErrorMessage } from "../components/PlayPage/ErrorMessage";
import { NoQuestionsLeft } from "../components/PlayPage/NoQuestionsLeft";
import { NotStarted } from "../components/PlayPage/NotStarted";
import { toRelativeTime } from "../utilities/time";
import { usePreloadedStyle } from "../utilities/usePreloadedStyle";

const RANDOM_QUESTION = gql`
  query getRandomQuestion($lastCompletedQuestionId: Int) {
    randomQuestion(lastCompletedQuestionId: $lastCompletedQuestionId) {
      id
      content
      createdAtUtc
      createdByName
    }
  }
`;

export function PlayPage() {
  const [
    getRandomQuestion,
    { data, loading: isQuestionLoading, error, called },
  ] = useLazyQuery(RANDOM_QUESTION, {
    fetchPolicy: "network-only",
  });

  const question = data?.randomQuestion;
  const classes = useStyles();
  const { isImageLoading, style, getNewStyle } = usePreloadedStyle();

  const handleNewQuestion = (lastCompletedQuestionId?: number) => {
    getNewStyle();
    getRandomQuestion({
      variables: {
        lastCompletedQuestionId,
      },
    });
  };

  const isLoading = isQuestionLoading || isImageLoading;

  if (!called) {
    return <NotStarted onClick={() => handleNewQuestion()} />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (called && !isLoading && !question) {
    return <NoQuestionsLeft />;
  }

  return (
    <Box paddingTop={3} paddingLeft={2} paddingRight={2}>
      {isLoading && (
        <Centered className={classes.paper} marginTop={0}>
          <CircularProgress />
        </Centered>
      )}
      {!isLoading && question && (
        <Grow timeout={1000} in={true}>
          <Fade timeout={1000} in={true}>
            <Paper className={classes.paper} elevation={4}>
              <div style={style} className={classes.background} />
              <Box
                height="100%"
                width="100%"
                display="flex"
                flexDirection="column"
                flexGrow="1"
              >
                <Typography className={classes.date} variant="overline">
                  {toRelativeTime(question.createdAtUtc)} ago
                </Typography>
                <Box className={classes.questionContainer}>
                  <span className={classes.question}>{question.content}</span>
                </Box>
                <Typography className={classes.author} variant="caption">
                  {question.createdByName}
                </Typography>
              </Box>
            </Paper>
          </Fade>
        </Grow>
      )}
      {(isLoading || !error) && (
        <Box display="flex" justifyContent="space-between" marginTop="25px">
          <Fab
            color="default"
            variant="extended"
            disabled={isLoading}
            onClick={() => handleNewQuestion()}
          >
            Skip for later
          </Fab>
          <Fab
            color="primary"
            disabled={isLoading}
            variant="extended"
            onClick={() => handleNewQuestion(question.id)}
          >
            <NavigateNextIcon />
            Mark as done
          </Fab>
        </Box>
      )}
    </Box>
  );
}

const useStyles = makeStyles(() => ({
  background: {
    height: "100%",
    width: "100%",
    opacity: "0.4",
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  paper: {
    position: "relative",
    padding: "10px",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontFamily: "Indie Flower, cursive;",
    fontSize: "1.8rem",
  },
  questionContainer: {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    justifyContent: "center",
  },
  date: {
    display: "flex",
  },
  author: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
