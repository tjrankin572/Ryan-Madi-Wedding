import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/footer.module.css"

const Footer = () => (
  <footer>
    <br></br>
    

    <p>Thanks for stopping by!</p>
    <p>We're looking forward to seeing you!</p>
    <StaticImage src="../images/vector_smile.png" className="icon" objectFit="fill" width={100}/>
    <Link to="#home" className="back-to-top">Back to Top</Link>


  </footer>
)
/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/
export default Footer
