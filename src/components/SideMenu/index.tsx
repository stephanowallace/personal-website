import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'
import ProfilePicture from '../ProfilePicture'

const Container = styled.div`
  background-color: #8e24aa;
  border-radius: 24px;
  padding: 2rem;
  width: 240px;
`

const Name = styled.p`
  color: white;
  /* font-family: 'Roboto', sans-serif; */
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: .5rem;
`

const Position = styled.span`
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
`

const SideMenu = () => {
  return (
    <Container>
      <ProfilePicture size={'small'} />
      <Name>Stéphano Wallace</Name>
      <Position>Front-end Developer</Position>
      <Navigation />
    </Container>
  )
}

export default SideMenu