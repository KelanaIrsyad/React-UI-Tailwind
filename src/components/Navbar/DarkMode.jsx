import { useEffect, useState } from 'react';
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";

function DarkMode() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="relative">
      <LiaToggleOnSolid
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
        size={24} 
      />
      <LiaToggleOffSolid
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`cursor-pointer ${theme === "dark" ? "opacity-100" : "opacity-0"}`}
        size={24}
      />
    </div>
  );
}

export default DarkMode;