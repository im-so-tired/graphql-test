import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authorization } from "./Pages/Authorization";
import { Entrance } from "./Pages/Entrance";
import { Main } from "./Pages/Main";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/author"></Navigate>}></Route>
        <Route path="/author" element={<Authorization></Authorization>}></Route>
        <Route path="/entry" element={<Entrance></Entrance>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
