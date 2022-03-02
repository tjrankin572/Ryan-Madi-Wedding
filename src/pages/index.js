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

   
    <section id="home">
      <Hero heroImage="hero-location-time"  heroText=""  />
    </section>
    
    <section className="our-story section-alignment" id="our-story">
      <div className="wrapper">
        <h2>Our Story</h2>
        <p>We met, he was hot... That's about it.</p>
      </div>
      
    </section>
    <section className="when-and-where section-alignment" id="when-and-where">
      

      <div className="white-wrapper">
        <h2>When & Where</h2>
        <p>1980 something something place</p>
        <p>June... Something</p>
        <a href="https://dareformore.org/" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Google Maps</a>

      </div>

    </section>

    <section className="rsvp section-alignment" id="rsvp">
      
      <div className="white-wrapper" >
        <h2>RSVP</h2>
        <p>Come...Or Don't...Up to you.</p>
        <a href="https://dareformore.org/" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Sign Up</a>

        <h2>Contact</h2>
        <p>Let us know if you run into any issues!</p>
        <p>Phone: 555-555-5555</p>        

      </div>

    </section>

    <section className="registry section-alignment" id="registry">
      
      <div className="white-wrapper">
        <h2>Registry</h2>
        <p>Buy Us Things</p>
        <a href="https://dareformore.org/" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Bed Bath & Beyond</a>
        <a href="https://dareformore.org/" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Amazon</a>
      </div>

    </section>

    <section className="verse-section section-alignment" id="verse">
      <div className="wrapper">
        <h2>Bible Reference</h2>
        <p>The Verse text...hello there</p>
      </div>
    </section>

   
    
  </Layout>
)

export default MissionPartner2;
