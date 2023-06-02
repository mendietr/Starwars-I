import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import Ships from "./components/Ships/Ships";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/character/:id" element={<CharacterDetail/>} />
        <Route path="/character/create" element={<CreateCharacter/>} />
        <Route path="/ships" element={<Ships/>} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
