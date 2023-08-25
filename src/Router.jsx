import { Route, Routes } from "react-router-dom";

import Step from "./components/step";
import Travel from "./components/travel";
import Expenses from "./components/expenses";

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
