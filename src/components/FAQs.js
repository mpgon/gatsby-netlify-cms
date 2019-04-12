import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import FAQ from "./FAQ";

function FAQs({ data }) {
  const { edges: faqs } = data.allMarkdownRemark;
  return (
    <div>
      {faqs.map(({ node: { id, html, frontmatter: { question } } }) => (
        <div key={id} style={{ margin: "50px 100px 0px 100px" }}>
          <FAQ question={question} answer={html} />
        </div>
      ))}
    </div>
  );
}

FAQs.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FAQsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___question] }
          filter: { frontmatter: { templateKey: { eq: "faq" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              frontmatter {
                question
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FAQs data={data} count={count} />}
  />
);
