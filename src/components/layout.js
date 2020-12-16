/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Sidebar from "./sidebar"

import "../../node_modules/github-markdown-css/github-markdown.css"
import "./layout.css"
// import "./github-old.css"

import BlogLinks from "../utils/bloglinks"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="container" style={{display: "flex"}}>
          <Sidebar links={BlogLinks}/>
          <div className="content">
            <main>{children}</main>
            {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
          </div>
        </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
