import { useContext } from "react";
import { ThemeContext } from "./ThemeContex";

const ClientThemeWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>{children}</div>;
};

export default ClientThemeWrapper;
