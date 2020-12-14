import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Component } from "react"

class IndexPage extends Component {

  render() {

    return(
      <Layout>
        <SEO title="Home" />
        <h1>Hi people</h1>
      </Layout>
    );
  }
}

export default IndexPage
