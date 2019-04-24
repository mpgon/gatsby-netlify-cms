import React from "react";
import Helmet from "react-helmet";
import { Link, navigate, graphql } from "gatsby";
import Layout from "../components/Layout";
import Button from "@material-ui/core/Button";

class TagRoute extends React.Component {
  render() {
    const faqs = this.props.data.allMarkdownRemark.edges;
    const faqLinks = faqs.map(faq => (
      <li key={faq.node.fields.slug}>
        <Link to={faq.node.fields.slug}>
          <h2>{faq.node.frontmatter.question}</h2>
        </Link>
      </li>
    ));
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section>
          <Helmet title={`${tag} | ${title}`} />
          <div>
            <div>
              <div style={{ marginBottom: "6rem" }}>
                <h3>{tagHeader}</h3>
                <ul>{faqLinks}</ul>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/tags/")}
                >
                  Browse all tags
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { order: ASC, fields: [frontmatter___question] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            question
          }
        }
      }
    }
  }
`;
