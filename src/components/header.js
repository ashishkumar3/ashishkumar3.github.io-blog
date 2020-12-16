import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
      <h1 style={{padding: "20px 45px", margin: "0"}}>
        <Link
          to="/"
          >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
