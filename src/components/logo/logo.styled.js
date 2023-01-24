import styled, { css, keyframes } from "styled-components";

const highlightAnimation = keyframes`
  from {
    scale: 1;
    opacity: 1;
  }

  to {
    scale: 1.1;
    opacity: 0.5;
  }
`;

const applyAnimation = css`
    animation: ${highlightAnimation} 1s;
`


export const LogoContainer = styled.div`
`

export const LogoInput = styled.input`
    display: none;
    opacity: 1;
`

export const LogoLabel = styled.label`
    height: 10rem;
    width: 10rem;
    display: block;
    overflow: hidden;
    border-radius: 1rem;
    transition: all .5s ease;
    ${props => props.highlight && applyAnimation };

    ${LogoInput}:checked + && { 
        scale: 1.1;
    }
    ${LogoInput}:not(:checked) + && { 
        opacity: 0.5;
    }
`

export const LogoImg = styled.img`
        height: 100%;
        width: 100%;
        overflow: hidden;
        object-fit: cover;
`