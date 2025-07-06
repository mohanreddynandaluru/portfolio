import React, { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navigation from "./components/Navigation";
import SocialIcons from "./components/SocialIcons";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  const navigate = async (pageId) => {
    setIsLoading(true);

    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    setCurrentPage(pageId);
    setIsLoading(false);
  };

  useEffect(() => {
    // Set initial theme
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Loader isLoading={isLoading} />

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <SocialIcons />

      <Navigation currentPage={currentPage} onNavigate={navigate} />

      {/* Render all pages but only show the active one */}
      <div style={{ display: currentPage === "home" ? "block" : "none" }}>
        <HomePage />
      </div>

      <div style={{ display: currentPage === "skills" ? "block" : "none" }}>
        <SkillsPage />
      </div>

      <div style={{ display: currentPage === "projects" ? "block" : "none" }}>
        <ProjectsPage />
      </div>
    </div>
  );
}

export default App; 