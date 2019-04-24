import React from "react";
import FAQ from "../components/FAQ";

function FAQTemplate({ data }) {
  const { markdownRemark: faq } = data;
  const { question, tags } = faq.frontmatter;
  const answer = faq.html;
  return <FAQ question={question} answer={answer} tags={tags} />;
}

export const pageQuery = graphql`
  query FAQByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        question
        tags
      }
    }
  }
`;

export default FAQTemplate;
