import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: #EB9B00;
  padding: 1rem 2rem;
  border: 2px solid #EB9B00;
  color: #FFF;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background: #B87900;
    border: 2px solid #B87900;
    transition: background-color 0.2s, border-color 0.2s;
  }
  `

export function AbButton(){
  return (
  <StyledButton>
    Clique Aqui
  </StyledButton>
  )
}