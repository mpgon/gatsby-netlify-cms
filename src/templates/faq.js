import React from "react";
import FAQ from "../components/FAQ";

function FAQTemplate({ data }) {
  const { markdownRemark: faq } = data;
  const { question } = faq.frontmatter;
  const answer = faq.html;
  return <FAQ question={question} answer={answer} />;
}

export const pageQuery = graphql`
  query FAQByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        question
      }
    }
  }
`;

export default FAQTemplate;
