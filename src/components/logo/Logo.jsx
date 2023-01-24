import React from "react";
import { LogoContainer, LogoImg, LogoInput, LogoLabel } from "./logo.styled";

const Logo = ({ idFor, checked, highlight }) => {
  return (
    <LogoContainer >
      <LogoInput name="logo" id={idFor} type='radio' readOnly checked={checked}/>
      <LogoLabel htmlFor={idFor} highlight={highlight}>
        <LogoImg src="https://scontent.ftuc4-1.fna.fbcdn.net/v/t39.30808-6/240608019_1014328649404717_3318856511651775726_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FJZ0ICxhJFkAX9sGvVH&tn=nTlFYfcABtHbG1B0&_nc_ht=scontent.ftuc4-1.fna&oh=00_AfAN3yXbgxOHlN32Eb94C5Xsz63e1ksjesGre-7-VyDhAQ&oe=63D4665A" />
      </LogoLabel>
    </LogoContainer>
  );
};

export default Logo;
