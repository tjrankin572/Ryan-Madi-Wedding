import * as React from "react"
import PropTypes from "prop-types"
import  "../styles/global.css"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Hero = ({heroText, heroCitation, heroBig, heroImage}) => (
    
    <section>
 
    
      <div className="mobile-container">
                <Link to="/" className="logo">Missions For More</Link>
                <label for="toggle" class="hamburger"><FontAwesomeIcon icon={faBars}  size="2x"></FontAwesomeIcon></label>

                <input type="checkbox" id="toggle" value="checked"></input>
                <div class="nav-mobile">
                    <br></br>
                    <nav>
                        <ul>
                            <Link to="/" >Home</Link>
                            <Link to="/location-time" >Location/Time</Link>
                            <Link to="/rsvp-registry">RSVP/Registry</Link>
                        </ul>
                    </nav>
                </div>
                
      </div>
      <div className="hero-flex-container">

       
        <div className={heroImage}>
                <div className="logo">
                    <Link to="/" className="nav-link">Ryan & Madi</Link>
                </div>

            <nav className="hero_nav flex-1"> 
                <div>
                    <Link to="/location-time" className="nav-link">Our Story</Link>
                </div>          
                <div>
                    <Link to="/location-time" className="nav-link">When And Where</Link>
                </div>
                <div>
                    <Link to="/rsvp-registry" className="nav-link">RSVP</Link>
                </div>
                <div>
                    <Link to="/rsvp-registry" className="nav-link">Registry</Link>
                </div>
            </nav>

            <div className="flex-3">
                <p className="hero_text">{heroText}</p>
                <br></br>
                <p className="hero_text hero-text-bold">{heroCitation}</p>
                <br></br>
                <p className="hero-big-text hero-text-bold">{heroBig}</p>
            </div>
        </div> 
      </div>
    
    </section>
)



export default Hero;