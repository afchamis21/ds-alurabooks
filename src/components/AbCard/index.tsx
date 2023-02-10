import React, { ReactNode } from 'react'
import styled from 'styled-components'

export interface AbCardProps {
  children: ReactNode
}

const StyledCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    padding: 1rem;

  @media (min-width: 768px) {
    padding: 1.5rem
  }

  @media (min-width: 1024px) {
    padding: 3rem 2rem 3rem 3rem
  }
  `

export function AbCard({ children }: AbCardProps){
  return (
  <StyledCard>
    {children}
  </StyledCard>
  )
}