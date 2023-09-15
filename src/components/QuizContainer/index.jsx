import { Box } from "@mui/material";
import { useEffect, useReducer } from "react";

import Loader from "../Loader";
import BasicError from "../BasicError";
import Question from "../Question";

import { fetchQuestions } from "../../api/questions";
import QuizStarterScreen from "../QuizStarterScreen";

const initialState = {
  questions: [],
  status: "loading",
  currentQuestionIndex: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "questionLoaded":
      return { ...state, questions: action.payload, status: "ready" };
    case "fetchFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Unknown action");
  }
};

const QuizContainer = () => {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;

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
      {status === "active" && <Question />}
    </Box>
  );
};

export default QuizContainer;
