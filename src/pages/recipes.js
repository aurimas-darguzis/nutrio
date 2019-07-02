import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaHome } from "react-icons/fa"

const Recipes = () => (
  <Layout>
    <SEO title="green food recipes" />
    <Link to="/">
      <FaHome />
    </Link>
  </Layout>
)

export default Recipes
