import React, {createContext, useState, useContext, useEffect} from "react";

//initialising context
const ThemeContext = createContext();

//custom hook to use everywhere in app 
export const useTheme = () => {
  return useContext(ThemeContext);
};

//function that contain all logic
export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //just changes our theme 
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};