import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPrayingHands } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'



import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"

const MissionPartner2 = () => (
  <Layout>
    <Seo title="Mission / Partner" />

   
   
    <Hero heroImage="hero-location-time"  heroText="Ryan and Maddie are getting hitched! Wanna watch it happen?" />

   
    
  </Layout>
)

export default MissionPartner2;
