import React from "react";
import { useTheme } from "next-themes";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";

const DarkLightIcon = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme == "light" ? (
        <DarkModeSharpIcon  />
        ) : theme == "dark" ? (
          <LightModeSharpIcon />
      ) : (
        <LightModeSharpIcon />
      )}
    </button>
  );
};

export default DarkLightIcon;
