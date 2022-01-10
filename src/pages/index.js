import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import MobileNavigationMenu from "../components/mobile-navigation-menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "../styles/global.css"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  
    <Hero heroImage="hero-image" heroText="Human Trafficking includes the use of force, fraud, or coercion to obtain some type of Labor or Commercial Sex Act." heroCitation="Homeland Security"/>
        
   

  </Layout>
)

export default IndexPage
