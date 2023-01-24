import { useEffect } from "react";
import { OptionLogo } from "../../helpers/optionLogo";
import { useChangeButtonContext } from "../../provider/provider";
import Logo from "../logo/Logo";
import { LogoGroup } from "./logoWrapper.styled";

const LogoWrapper = ({ numberOption }) => {
  const lastButton = OptionLogo.filter(
    (logo, index) => index === OptionLogo.at(-1)
  );
  const setCurrentButton = useChangeButtonContext({});
  useEffect(() => {
    setCurrentButton({
      first: numberOption === 0,
      last: numberOption == lastButton,
    });
  }, [numberOption]);

  return (
    <LogoGroup>
      {OptionLogo?.map((logo, index) => {
        return (
          <Logo
          idFor={index}
          checked={numberOption === index}
          key={index} />
        );
      })}
    </LogoGroup>
  );
};

export default LogoWrapper;
