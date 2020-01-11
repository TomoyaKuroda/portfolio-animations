import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Layout from "../components/layout"
import * as emailjs from "emailjs-com"

const Contact = () => (
  <Layout>
  <p>test</p>
  </Layout>
)

export default Contact

// export const query = graphql`
//   query ContactQuery {
//     contact: datoCmsContactPage {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//     }
//   }
// `
