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
import Image from "./image"

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
          <div style={{
            // border: "1px solid black",
            width: "20vw"
          }}>
            <Image />
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <p>Ashish Kumar</p>
              <a href="https://github.com/ashishkumar3" target="_blank">@ashishkumar3</a>
              <a href="https://www.instagram.com/ashishk4371/" target="_blank">@ashishk4371</a>
            </div>
          </div>
        </div>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
