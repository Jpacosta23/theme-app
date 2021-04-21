import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Button = () => {
  const { myThemeFunction } = useContext(ThemeContext);

  return <button onClick={myThemeFunction}>Cambiar</button>;
};

export default Button;
