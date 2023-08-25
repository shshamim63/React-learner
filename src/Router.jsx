import { Route, Routes } from "react-router-dom";

import Step from "./pages/Step";
import Travel from "./pages/Travel";
import Expenses from "./pages/Expenses";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Step />} />
      <Route path="tracker" element={<Step />} />
      <Route path="travel" element={<Travel />} />
      <Route path="expenses" element={<Expenses />} />
    </Routes>
  );
};
export default AppRouter;
