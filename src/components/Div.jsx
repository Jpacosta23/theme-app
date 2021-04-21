import { useContext } from "react";
import { ThemeContext, themeCharacteristics } from "../context/ThemeContext";

const Div = () => {
  const { myTheme } = useContext(ThemeContext);
  return (
    <div
      style={
        myTheme === false
          ? themeCharacteristics.light
          : themeCharacteristics.dark
      }
    >
      TEMA
    </div>
  );
};

export default Div;
