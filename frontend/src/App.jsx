import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alltasks from "./pages/Alltasks";
import Imptasks from "./pages/Imptasks";
import Completedtasks from "./pages/Completedtasks";
import Pendingtasks from "./pages/Pendingtasks";

const App = () => {
  return (
    <div className="bg-teal-900 text-white h-screen p-2">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}>
            <Route index element={<Alltasks/>} />
            <Route path="/imp" element={<Imptasks/>} />
            <Route path="/completed" element={<Completedtasks/>} />
            <Route path="/pending" element={<Pendingtasks/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
