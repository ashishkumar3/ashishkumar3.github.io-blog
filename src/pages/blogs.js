import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogsPage = () => (
  <Layout>
    <SEO title="Blogs" />
    <Link to="/blogs/dependency-injection/">Dependency Injection</Link> <br />
    <Link to="/blogs/strategy-pattern/">Strategy Pattern</Link>
  </Layout>
)

export default BlogsPage
