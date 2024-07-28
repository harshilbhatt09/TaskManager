import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Alltasks from "./pages/Alltasks";
import Imptasks from "./pages/Imptasks";
import Completedtasks from "./pages/Completedtasks";
import Pendingtasks from "./pages/Pendingtasks";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="bg-teal-900 text-white h-screen p-2 relative">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}>
            <Route index element={<Alltasks/>} />
            <Route path="/imp" element={<Imptasks/>} />
            <Route path="/completed" element={<Completedtasks/>} />
            <Route path="/pending" element={<Pendingtasks/>} />
          </Route>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
