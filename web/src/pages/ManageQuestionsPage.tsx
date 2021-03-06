import Box from "@material-ui/core/Box";
import React from "react";
import { AddQuestions } from "../components/AddQuestions";
import { Questions } from "../components/Questions";
import { Welcome } from "../components/Welcome";

export function ManageQuestionsPage() {
  return (
    <Box paddingTop={3}>
      <Welcome />
      <AddQuestions />
      <Questions />
    </Box>
  );
}
