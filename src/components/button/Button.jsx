import React from 'react'
import { ButtonWrapper } from './button.styled'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Button = ({direction, onClick}) => {
  return (
    <ButtonWrapper onClick={onClick}>
       { direction === 'left' ? <FaArrowLeft/> : <FaArrowRight/>}
    </ButtonWrapper>
  )
}

export default Button