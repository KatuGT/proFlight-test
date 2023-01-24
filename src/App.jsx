import { useState } from "react";
import { MainWrapper } from "./app.styled";
import Button from "./components/button/Button";
import LogoWrapper from "./components/logoWrapper/LogoWrapper";
import { OptionLogo } from "./helpers/optionLogo";
import { useBottonContext } from "./provider/provider";

function App() {
  const [numberOption, setNumberOption] = useState(0);
  const currenButton = useBottonContext();
  const lastIndex = OptionLogo.at(-1)

  const handleArrows = (directionArrow) => {
    if (directionArrow === "left" && !currenButton.first) {
      setNumberOption((prev) => prev - 1);
    } else if (directionArrow === "left" && currenButton.first) {
      setNumberOption(lastIndex);
    } else if (directionArrow === "right" && currenButton.last) {
      setNumberOption(0);
    } else if (directionArrow === "right" && !currenButton.last) {
      setNumberOption((prev) => prev + 1);
    }
  };
  return (
    <MainWrapper>
      <Button direction="left" onClick={() => handleArrows("left")} />
      <LogoWrapper numberOption={numberOption} />
      <Button direction="right" onClick={() => handleArrows("right")} />
    </MainWrapper>
  );
}

export default App;
