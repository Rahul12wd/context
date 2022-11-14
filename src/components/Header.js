import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context";

export default function Hero() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  return (
    <>
      <main>
        <p style={{ color: darkMode ? "cyan" : "#000" }}>Geekster</p>
        <a href="/" style={{ color: darkMode ? "#fff" : "#000" }}>
          Home
        </a>
        <br />
        <a href="/home" style={{ color: darkMode ? "#fff" : "#000" }}>
          Product
        </a>
        <br />
        <a href="/service" style={{ color: darkMode ? "#fff" : "#000" }}>
          Service
        </a>
        <br />
        {!darkMode ? (
          <button
            width="35px"
            height="35px"
            fill="#888"
            onClick={() => setDarkMode(true)}
            style={{
              padding: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Toggle theme to dark
          </button>
        ) : (
          <button
            width="35px"
            fill="#888"
            onClick={() => {
              setDarkMode(false);
            }}
            style={{
              padding: "10px",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Toggle theme to light
          </button>
        )}
        <p style={{ color: darkMode ? "cyan" : "#000" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dicta quaerat maxime! Voluptatum ipsa deleniti possimus esse. Saepe id
          tenetur animi necessitatibus rerum aut neque nesciunt consequatur
          tempora sequi. Assumenda Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellendus dicta quaerat maxime! Voluptatum ipsa
          deleniti possimus esse. Saepe id tenetur animi necessitatibus rerum
          aut neque nesciunt consequatur tempora sequi. Assumenda.
        </p>
      </main>
    </>
  );
}
