import React from "react";
import FAQ from "../components/FAQ";
import Layout from "../components/Layout";

function FAQTemplate({ data }) {
  const { markdownRemark: faq } = data;
  const { question, tags } = faq.frontmatter;
  const answer = faq.html;
  return (
    <Layout>
      <FAQ question={question} answer={answer} tags={tags} />
    </Layout>
  );
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
