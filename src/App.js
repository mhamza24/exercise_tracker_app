import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import DisplayExerciseList from "./components/ExerciseList";
import EditExerciseList from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact element={<DisplayExerciseList />} />
      </Routes>

      <Routes>
        <Route path="/edit:id" element={<EditExerciseList />} />
      </Routes>
      <Routes>
        <Route path="/create" element={<CreateExercise />} />
      </Routes>
      <Routes>
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
