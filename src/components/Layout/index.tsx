import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: 'F6F7FF';
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  primary: '#6a1b9a',
  primaryDark: '#38006b',
  primaryLight: '#9c4dcc'
}

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <GlobalStyle theme="purple" />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}