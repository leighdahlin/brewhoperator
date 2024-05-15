import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Homepage from "../components/home/Homepage"

const IndexPage = () => (
  <Layout>
    <Homepage/>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Brew Hoperator: Your Brewery Search Engine" />

export default IndexPage
