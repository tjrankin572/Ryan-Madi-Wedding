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
    <Seo title="Ryan & Madi" />

   
   
    <Hero heroImage="hero-location-time"  heroText="" />
    <section className="our-story section-alignment">
      <div className="wrapper">
        <h2>Our Story</h2>
      </div>
      
    </section>
    <section className="when-and-where section-alignment">
      <h2>When & Where</h2>
    </section>
    <section className="rsvp section-alignment">
      <h2>RSVP</h2>
    </section>
    <section className="registry section-alignment">
      <h2>Registry</h2>
    </section>
    <section className="verse-section section-alignment">
      <div className="wrapper">
        <h2>Reference</h2>
      </div>
    </section>

   
    
  </Layout>
)

export default MissionPartner2;
