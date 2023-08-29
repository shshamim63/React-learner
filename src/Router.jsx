import { Route, Routes } from "react-router-dom";

import Step from "./pages/Step";
import Travel from "./pages/Travel";
import Expenses from "./pages/Expenses";
import UsePopcorn from "./pages/UsePopcorn";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Step />} />
      <Route path="tracker" element={<Step />} />
      <Route path="travel" element={<Travel />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="usepopcorn" element={<UsePopcorn />} />
    </Routes>
  );
};
export default AppRouter;
