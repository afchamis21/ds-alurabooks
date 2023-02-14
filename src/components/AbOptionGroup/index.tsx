import React, { useState } from 'react'
import styled from 'styled-components'

interface AbOptionProps{
  id: number
  header: string
  body: string
  footer: string
}

export interface AbOptionGroupProps {
  options: AbOptionProps[]
  defaultValue?: number
  onChange?: (option: AbOptionProps | undefined) => void
}



const Container = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

const StyledSection = styled.section<{isActive: boolean}>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  text-align: center;
  padding: 0.5rem 0;
  width: 12.3125rem;
  border: 1px solid;
  border-color: ${(props) => props.isActive ? '#002F52' : '#EB9B00'};;
  border-radius: 8px;
  font-family: sans-serif;
  cursor: pointer;
  transition: filter 0.2s;
  background: ${(props) => props.isActive ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : 'transparent'};

  header {
    margin-bottom: 0.25rem;
    color: ${(props) => props.isActive ? '#FFF' : '#EB9B00'};
    font-size:0.75rem;
  }

  strong {
    color: ${(props) => props.isActive ? '#FFF' : '#EB9B00'};
  }

  footer {
    color: ${(props) => props.isActive ? '#FFF' : '#00000054'};
    font-size: 0.75rem;
  }

  &:hover{
    filter: brightness(0.8);
  }
`

export function AbOptionGroup({options, defaultValue, onChange}:AbOptionGroupProps){
  const [activeOptionId, setActiveOptionId] = useState<number | undefined>(defaultValue)

  function handleSelectOption(targetId: number){
    setActiveOptionId(targetId)

    if(onChange){
      const targetOption = options.find(option => option.id === targetId)
      onChange(targetOption)
    }
  }

  return (
  <Container>
    {options.map(option => {
      return (
        <StyledSection 
          isActive={activeOptionId === option.id} 
          key={option.id}
          onClick={()=>handleSelectOption(option.id)}
        >
          <header>{option.header}</header>
          <div><strong>{option.body}</strong></div>
          <footer>{option.footer}</footer>
        </StyledSection>
      )
    })}
  </Container>
  )
}
