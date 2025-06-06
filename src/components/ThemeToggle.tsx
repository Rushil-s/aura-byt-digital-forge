
import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    // Force dark theme always
    const root = document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // Return null to hide the component completely
  return null;
};

export default ThemeToggle;
