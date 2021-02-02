import React from 'react'
import styled from 'styled-components'

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
  }

  &:hover {
    margin-left: 5px;
  }
`

const Navigation = () => {
  return (
    <List>
      <ListItem>
        <a href="#">Home</a>
      </ListItem>
      <ListItem>
        <a href="#">About</a>
      </ListItem>
      <ListItem>
        <a href="#">Works</a>
      </ListItem>
    </List>
  )
}

export default Navigation