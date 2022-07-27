import "./App.css";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nutritioncomp from "./Component/Routes/Nutritioncomp";
import WorkoutCompo from "./Component/Routes/WorkoutCompo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
        <Routes>
          <Route path="/:userid/nutrition" element={<Nutritioncomp />}></Route>
          <Route path="/:userid/workout" element={<WorkoutCompo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
