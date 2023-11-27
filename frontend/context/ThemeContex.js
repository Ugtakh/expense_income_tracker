const { useContext, createContext, useState, useEffect } = require("react");

export const ThemeContext = createContext("light ");

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") || "lights";
    setTheme(storedTheme);
  }, []);

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  if (!isMounted) {
    return <div>Loading ...</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
