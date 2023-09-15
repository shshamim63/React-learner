import { Container } from "@mui/material";
import { customColor } from "../../style";

import LogoHeader from "../../components/LogoHeader";

const ReactQuiz = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 3 }}>
      <LogoHeader title="📝 React Quiz 🕐" bgColor={customColor.indigo.light} />
    </Container>
  );
};

export default ReactQuiz;
