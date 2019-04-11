import React from "react";

export function FAQ({ question, answer }) {
  return (
    <div>
      <h1>
        <b>Question: </b>
        {question}
      </h1>
      <h1>
        <b>Answer: </b>
        {answer}
      </h1>
    </div>
  );
}

function FAQTemplate({ data }) {
  const { markdownRemark: faq } = data;
  const { title, answer } = faq.frontmatter;
  return <FAQ question={title} answer={answer} />;
}

export const pageQuery = graphql`
  query FAQByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        answer
      }
    }
  }
`;

export default FAQTemplate;
