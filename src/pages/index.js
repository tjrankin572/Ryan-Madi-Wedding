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
      <div className="our-story-wrapper">
        <h2>Our Story</h2>
        <StaticImage src="../images/heart_vector.png" className="icon" objectFit="fill" width={500}/>
        <p>I was at a friends house back in June of 2020. We were chatting, as girls do, about dates. 
          My friend’s sister was telling us about a date she had recently been on and explaining why their personalities 
          and values didn’t line up. Only everything she brought up was something I was looking for. 
          I jokingly told her to give him my number…and she did.</p>
          <br></br>
          <p>After a year of knowing each other we officially started dating and then after 8 months of dating, 
          Ryan asked me to marry him on New Years Eve at a nerdy Star Wars party. 
          It was perfect for us.And now here we are.</p>
          <br></br> 
          <p>We hope you will join us for our special day as we start the rest of our lives together!</p>
      </div>
      
    </section>
    <section className="when-and-where section-alignment" id="when-and-where">
      

      <div className="when-and-where-wrapper">
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

        <h3>Ryan Rankin</h3>
        <p>Phone: (208) 484-2688</p>  
        <p>Email: ryanwillrankin@gmail.com</p>      

        <h3>Madison Barno</h3>
        <p>Phone: (775) 530-2292</p>  
        <p>Email: madison.barno@gmail.com</p>      

      </div>

    </section>

    <section className="registry section-alignment" id="registry">
      
      <div className="white-wrapper">
        <h2>Registry</h2>
        <StaticImage src="../images/drawing_vector.png" className="icon" width={500}/>
        <br></br>
        <a href="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/551170972?eventType=Wedding&fbclid=IwAR1GpSRW3Yaktp3B5Q6vc2-RJUgQx4izSDp57TucRBr1w5h1iBLRIAOpVs8" target="_blank" class="flex-item btn btn-dark bottom-margin-b-20x">Bed Bath & Beyond</a>
      </div>

    </section>

    <section className="verse-section section-alignment" id="verse">
      <div className="verse-wrapper">
        <h2>Favorite Bible Verses</h2>
        <br></br>
        <StaticImage src="../images/cross_vector.png" className="icon" width={100}/>
        <br></br>
        <h3>Ryan's Favorite</h3>
        <h3>Philippians 4:6-7</h3>
        <p>Be careful for nothing; but in every thing by prayer and supplication with thanksgiving 
          let your requests be made known unto God. And the peace of God, which passeth all understanding, 
          shall keep your hearts and minds through Christ Jesus.</p>
        <br></br>
        <h3>Madi's Favorite</h3>
        <h3>Luke 1:37</h3>
        <p> For with God nothing shall be impossible.</p>
      </div>
    </section>

   
    
  </Layout>
)

export default MissionPartner2;
