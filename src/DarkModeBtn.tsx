"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


const buttonStyles = {
  width: "35%",
  padding: "10px",
  backgroundColor: "transparent",
  border: "1px solid #ccc",
  outline: "none",
  fontWeight: "bold",
};

const DarkModeBtn = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
    setTheme("light")
  }, []);
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <button
      style={{
        ...buttonStyles,
        background:
          "linear-gradient(43deg, rgba(255,255,255,1) 11%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 90%)",
          color: "white"
      }}
      onClick={() => setTheme("system")}
      className={theme === "system" ? "selected" : ""}
    >
      System
    </button>
    <button
      style={{
        ...buttonStyles,
        backgroundColor: "#333",
        color: "#fff",
      }}
      onClick={() => setTheme("dark")}
      className={theme === "dark" ? "selected" : ""}
    >
      Dark
    </button>
    <button
      style={{
        ...buttonStyles,
        backgroundColor: "#fff",
        color: "#333",
      }}
      onClick={() => setTheme("light")}
      className={theme === "light" ? "selected" : ""}
    >
      Light
    </button>
  </div>
);
}

export default DarkModeBtn