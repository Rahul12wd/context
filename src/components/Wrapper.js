import React, { useContext } from "react";
import Header from "./Header";
import { DarkModeContext } from "../context";

export default function Wrapper() {
  const [darkMode] = useContext(DarkModeContext);
  console.log("from wrapper", darkMode);
  return (
    <section
      style={{
        backgroundColor: darkMode ? "#000" : "#fff",
        height: "100vh",
      }}
    >
      <Header />
    </section>
  );
}