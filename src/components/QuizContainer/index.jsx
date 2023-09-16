import { Box, Stack, Paper } from "@mui/material";
import { useEffect, useReducer } from "react";

import { customColor } from "../../style";

import Loader from "../Loader";
import BasicError from "../BasicError";
import Question from "../Question";
import Progress from "../Progress";

import { fetchQuestions } from "../../api/questions";
import QuizStarterScreen from "../QuizStarterScreen";
import FinishedScreen from "../FinishScreen";
import NextButton from "../NextButton";

const initialState = {
  questions: [],
  status: "loading",
  currentQuestionIndex: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "questionLoaded":
      return { ...state, questions: action.payload, status: "ready" };
    case "fetchFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "answer":
      const question = state.questions.at(state.currentQuestionIndex);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "next":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };
    default:
      throw new Error("Unknown action");
  }
};

const QuizContainer = () => {
  const [
    { questions, status, currentQuestionIndex, answer, points, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestion = questions.length;
  const totalPoints = questions.reduce((prev, curr) => prev + curr.points, 0);

  const onStartQuiz = () => {
    dispatch({ type: "start" });
  };

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetchQuestions();
      dispatch({ type: "questionLoaded", payload: response });
    };
    try {
      getQuestions();
    } catch (error) {
      dispatch({ type: "fetchFailed" });
    }
  }, []);
  return (
    <Box
      sx={{
        width: "95%",
        padding: 3,
        margin: "auto",
      }}
    >
      {status === "loading" && (
        <Box sx={{ width: "50%", margin: "auto", mt: 10 }}>
          <Loader />
        </Box>
      )}
      {status === "ready" && (
        <QuizStarterScreen
          numQuestion={numQuestion}
          onStartQuiz={onStartQuiz}
        />
      )}
      {status === "fetchFailed" && (
        <BasicError message=" 💥 There was an error fetching questions 💥" />
      )}
      {status === "finished" && (
        <FinishedScreen
          points={points}
          maxPoint={totalPoints}
          highscore={highscore}
          dispatch={dispatch}
        />
      )}
      {status === "active" && (
        <Paper
          sx={{
            minWidth: 350,
            maxWidth: "70%",
            background: customColor.grey.secondary,
            margin: "auto",
            padding: 5,
            borderRadius: 3,
          }}
        >
          <Progress
            index={currentQuestionIndex}
            numQuestion={numQuestion}
            points={points}
            total={totalPoints}
          />
          <Stack sx={{ mt: 3 }}>
            <Question
              question={questions[currentQuestionIndex]}
              dispatch={dispatch}
              answer={answer}
            />
            {answer != null && (
              <NextButton
                dispatch={dispatch}
                numQuestion={numQuestion}
                index={currentQuestionIndex}
              />
            )}
          </Stack>
        </Paper>
      )}
    </Box>
  );
};

export default QuizContainer;
