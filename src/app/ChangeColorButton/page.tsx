'use client'
import React, { useState } from "react";

const ChangeColorButton = () => {
  const [colorScheme, setColorScheme] = useState("light");

  const handleClick = () => {
    setColorScheme(colorScheme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleClick}>
      Change to {colorScheme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ChangeColorButton;
