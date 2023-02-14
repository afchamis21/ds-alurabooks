import React from "react"
import styled from "styled-components"

export interface AbTextInputProps {
  inputName: string
  labelText: string
  placeholderText: string
  value?: string
  type?: 'text' | 'email' | 'password' | 'date'
  onChange: (value: string) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StyledLabel = styled.label`
    color: #002F52;
    display: block;
    font-weight: 700;
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 1.5rem;
`

const StyledInput = styled.input`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #002F52;
    padding: 0.5rem 1.5rem;
    border: 1px solid #002F52;
    border-radius: 9999px;

    &:focus{
        outline: none;
    }

    width: 100%;
    box-sizing: border-box;
`

export function AbTextInput({inputName, labelText, placeholderText, type = 'text', value, onChange}:AbTextInputProps){
  return (
    <Container>
      <StyledLabel htmlFor={inputName}>{labelText}</StyledLabel>
      <StyledInput 
        name={inputName}
        id={inputName}
        placeholder={placeholderText} 
        onChange={(e) => onChange(e.target.value)} 
        type={type} 
        value={value}
      />
    </Container>
  )
}