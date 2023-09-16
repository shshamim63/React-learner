import { Container } from "@mui/material";
import { customColor } from "../../style";

import LogoHeader from "../../components/LogoHeader";
import QuizContainer from "../../components/QuizContainer";

const ReactQuiz = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 3, background: customColor.grey.fade, minHeight: "90vh" }}
    >
      <LogoHeader title="📝 React Quiz 🕐" bgColor={customColor.indigo.light} />
      <QuizContainer />
    </Container>
  );
};

export default ReactQuiz;
