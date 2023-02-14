import styled from "styled-components"
import React from 'react'

export interface AbTagProps {
  text?: string
}

const StyledTag = styled.div`
  padding: 1.5rem 2rem;  
  color: #FFF;
  font-weight: bold;
  font-size: 1.5rem;
  display: inline-block;
  font-family: sans-serif;
  background: #EB9B00;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

export function AbTag({text}:AbTagProps){
  return <StyledTag>{text}</StyledTag>
}