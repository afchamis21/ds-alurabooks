import React from 'react'
import styled from 'styled-components'

export interface AbButtonProps {
  text?: string
  variation?: 'primary' | 'secondary'
  onClick?: () => void
} 

const PrimaryButton = styled.button`
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

const SecondaryButton = styled.button`
background: transparent;
padding: 1rem 2rem;
border: 2px solid #EB9B00;
color: #EB9B00;
font-weight: bold;
font-size: 1.25rem;
cursor: pointer;

&:hover {
  color: #B87900;
  border: 2px solid #B87900;
  transition: color 0.2s, border-color 0.2s;
}
`

export function AbButton({onClick, text, variation = 'primary'}:AbButtonProps){
  return variation === 'primary' ? (
    <PrimaryButton onClick={onClick}>
      {text}
    </PrimaryButton>
  ) : (
    <SecondaryButton onClick={onClick}>
      {text}
    </SecondaryButton>
  )
}