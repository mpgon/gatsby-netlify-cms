import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";

function FAQs({ data }) {
  const { edges: faqs } = data.allMarkdownRemark;
  return (
    <div>
      {faqs.map(({ node: { id, frontmatter: { question, answer } } }) => (
        <div key={id}>
          <h1>
            <b>Question: </b>
            {question}
          </h1>
          <h1>
            <b>Answer: </b>
            {answer}
          </h1>
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
          sort: { order: DESC, fields: [frontmatter___question] }
          filter: { frontmatter: { templateKey: { eq: "faq" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              frontmatter {
                question
                answer
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FAQs data={data} count={count} />}
  />
);
