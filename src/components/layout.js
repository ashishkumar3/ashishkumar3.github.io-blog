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
import "./layout.css"
import Sidebar from "./sidebar"

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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          display: "flex",
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
          marginTop: "6.45rem"
        }}
      >
        <Sidebar links={BlogLinks} />
        <div style={{
          marginLeft: "20%",
          display: "flex"
        }}>
          <div style={{
          }}>
            <main>{children}</main>
            <footer style={{
              marginTop: `2rem`
            }}>
            </footer>
          </div>
          {/* <div style={{
            position: "fixed",
            left: "75%"
          }}>Something important here or aybe less important :P</div> */}
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
