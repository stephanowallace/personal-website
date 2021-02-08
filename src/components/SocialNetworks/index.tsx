import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  a {
    text-decoration: none;
  }
`

const Circle = styled.div`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  height: 1rem;
  margin: 0 .75rem;
  padding: 6px;
  width: 1rem;
`

const SocialNetworks = () => {
  return (
    <Container>
      <a href="https://github.com/stephanowallace" target="_blank">
        <Circle>
          <FontAwesomeIcon icon={faGithub} />
        </Circle>
      </a>
      <a href="https://www.instagram.com/stephanowallace/" target="_blank">
        <Circle>
          <FontAwesomeIcon icon={faInstagram} />
        </Circle>
      </a>
      <a href="https://www.linkedin.com/in/st%C3%A9phano-wallace-saraiva-e-silva-662800a4/" target="_blank">
        <Circle>
          <FontAwesomeIcon icon={faLinkedin} />
        </Circle>
      </a>
    </Container>
  )
}

export default SocialNetworks