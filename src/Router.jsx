import { BrowserRouter, Route, Routes } from "react-router-dom"

import Step from './components/step'
import Travel from "./components/travel"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Step />}></Route>
      <Route path="tracker" element={<Step />}/>
      <Route path="travel" element={<Travel />}/>
    </Routes>
  )
}
export default AppRouter