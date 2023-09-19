import { Route, Routes } from "react-router-dom";

import Step from "./pages/Step";
import Travel from "./pages/Travel";
import Expenses from "./pages/Expenses";
import UsePopcorn from "./pages/UsePopcorn";
import HowReactWorks from "./pages/HowReactWorks";
import Weather from "./pages/Weather";
import ReactQuiz from "./pages/ReactQuiz";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Step title="Home" />} />
      <Route path="tracker" element={<Step title="Tracker" />} />
      <Route path="travel" element={<Travel title="Travel" />} />
      <Route path="expenses" element={<Expenses title="Expenses" />} />
      <Route path="usepopcorn" element={<UsePopcorn title="UsePopcorn" />} />
      <Route
        path="howreactworks"
        element={<HowReactWorks title="HowReactWorks" />}
      />
      <Route path="weather" element={<Weather title="Weather" />} />
      <Route path="reactquiz" element={<ReactQuiz title="ReactQuiz" />} />
    </Routes>
  );
};
export default AppRouter;
