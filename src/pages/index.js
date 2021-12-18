import React from "react"
import Layout from "../components/layout"
import { HomeHeader, Banner } from "../utils"
import SEO from "../components/seo"
import img from '../images/bcg/homeBcg.jpg'
import QuickInfo from '../components/HomeComponents/QuickInfo'
import Gallery from '../components/HomeComponents/Gallery'
import Menu from '../components/HomeComponents/Menu'
import sal from 'sal.js'

sal();

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img} >
      <Banner title="Cemût" subtitle="piccola osteria furlana" data-sal="slide-up" />
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
