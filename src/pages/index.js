import * as React from "react"
import styled from 'styled-components'
import SideMenu from "../components/SideMenu"
import Layout from '../components/Layout'

const Main = styled.main`
  margin: auto;
  max-width: 1200px;
  padding: 120px 0;
  width: 100%;
`

const IndexPage = () => {
  return (
    <Layout>
      <Main>
        <SideMenu />
      </Main>
    </Layout>
  )
}

export default IndexPage
