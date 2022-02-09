import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faTshirt } from '@fortawesome/free-solid-svg-icons'

const Bio = () => (
  <Layout>
    <Seo title="Bio" />
    <Hero heroImage="hero-rsvp-registry" heroText='Then I heard the voice of the Lord saying, “Whom shall I send? And who will go for us?” And I said, “Here am I. Send me!"' heroCitation="Isaiah 6:8"/>


   
  </Layout>
)

export default Bio