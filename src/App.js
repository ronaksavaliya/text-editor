import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";

function App() {
  function handleMode() {
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "rgb(60 55 55)";
    } else {
      setmode("light");
      document.body.style.background = "white";
    }
  }

  const [mode, setmode] = useState("light");

  return (
    <>
      <Nav title="Text Editor" mode={mode} handleMode={handleMode} />
      <Form mode={mode} />
    </>
  );
}

export default App;
