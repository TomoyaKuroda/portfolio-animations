import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";

const About = ({ data: { work } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={work.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{work.title}</h1>
        <p className="sheet__lead">{work.title}</p>
        <div className="sheet__gallery">
          {/* <Img fluid={about.photo.fluid} /> */}
        </div>
        {/* <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: about.bioNode.childMarkdownRemark.html
          }}
        /> */}
      </div>
    </article>
  </Layout>
);

export default About;

export const query = graphql`
  query ProjectsQuery {
    work: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
