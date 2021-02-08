import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptop, faUser } from '@fortawesome/free-solid-svg-icons'
import SocialNetworks from '../SocialNetworks'

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  color: white;
  line-height: 2;
  transition: all .125s ease-in;

  a {
    color: white;
    text-decoration: none;
    display: grid;
    grid-template-columns: 32px auto;
    align-items: center;
  }

  &:hover {
    margin-left: 5px;
  }
`

const Separator = styled.hr`
  margin: 20px 0;
`

const Navigation = () => {
  return (
    <>
      <List>
        <ListItem>
          <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
        </ListItem>
        <ListItem>
          <a href="#"><FontAwesomeIcon icon={faUser} /> About</a>
        </ListItem>
        <ListItem>
          <a href="#"><FontAwesomeIcon icon={faLaptop} /> Works</a>
        </ListItem>
      </List>
      <Separator />
      <SocialNetworks />
    </>
  )
}

export default Navigation