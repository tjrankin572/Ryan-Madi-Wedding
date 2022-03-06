import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

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
        <StaticImage src="../images/heart_vector.png" className="icon" objectFit="fill" width={500}/>
        <p>We met, he was hot... That's about it.</p>
      </div>
      
    </section>
    <section className="when-and-where section-alignment" id="when-and-where">
      

      <div className="rsvp-wrapper">
        <h2>When & Where</h2>
        <StaticImage src="../images/map_icon_vector.png" objectFit="fill" className="icon" width={500}/>
        <p>Treasure Valley Baptist Church</p>
        <p>1300 S Teare Ave, Meridian, ID 83642</p>
        <p>June 24th, 2022, 6:30 PM MTN</p>
        <a href="https://goo.gl/maps/CmfE8jdLhPeh4cxq5" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Google Maps</a>
        <h2>Livestream</h2>
        <a href="https://livestream.com/accounts/26556434/events/10198976?fbclid=IwAR1RzsemSSOZmRUvHecmuuSvL_EurzbntjFjmwFJvTPfRtbFVvvWikviOg0" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Watch It Happen!</a>

      </div>

    </section>

    <section className="rsvp section-alignment" id="rsvp">
      
      <div className="rsvp-wrapper" >
        <h2>RSVP</h2>
        <StaticImage src="../images/rsvp_vector.png" objectFit="fill" className="icon" width={100}/>
        <br></br>
        <p>We'd love for you to come! Let us know you're coming or watching the livestream.</p>
        <a href="https://forms.gle/A9uZg2vean42WMew8" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Sign Up</a>

        <h2>Contact</h2>
        <p>Let us know if you run into any issues!</p>
        <p>Phone: 555-555-5555</p>        

      </div>

    </section>

    <section className="registry section-alignment" id="registry">
      
      <div className="white-wrapper">
        <h2>Registry</h2>
        <StaticImage src="../images/drawing_vector.png" className="icon" width={500}/>
        <p>Buy Us Things</p>
        <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551170972?eventType=Wedding&fbclid=IwAR1GpSRW3Yaktp3B5Q6vc2-RJUgQx4izSDp57TucRBr1w5h1iBLRIAOpVs8" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Bed Bath & Beyond</a>
      </div>

    </section>

    <section className="verse-section section-alignment" id="verse">
      <div className="wrapper">
        <h2>Bible Reference</h2>
        <StaticImage src="../images/cross_vector.png" className="icon" width={100}/>
        <p>The Verse text...hello there</p>
      </div>
    </section>

   
    
  </Layout>
)

export default MissionPartner2;
