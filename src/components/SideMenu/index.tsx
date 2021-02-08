import React from 'react'
import styled from 'styled-components'
import Navigation from '../Navigation'
import ProfilePicture from '../ProfilePicture'

const Container = styled.div`
  background: radial-gradient(
    circle at 30% 107%,
    ${({ theme }) => theme.primaryLight} 0%,
    ${({ theme }) => theme.primary} 60%,
    ${({ theme }) => theme.primaryDark} 90%);
  border-radius: 24px;
  padding: 2rem;
  width: 240px;
`

const Name = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
`

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Position = styled.span`
  color: white;
  font-size: 0.75rem;
  text-transform: uppercase;
`

const SideMenu = () => {
  return (
    <Container>
      <PictureContainer>
        <ProfilePicture size={'small'} />
      </PictureContainer>
      <Name>Stéphano Wallace</Name>
      <Position>Front-end Developer</Position>
      <Navigation />
    </Container>
  )
}

export default SideMenu