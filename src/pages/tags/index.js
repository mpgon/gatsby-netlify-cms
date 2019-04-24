import React from "react";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { navigate, graphql } from "gatsby";
import Layout from "../../components/Layout";
import Chip from "@material-ui/core/Chip";

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section>
      <Helmet title={`Tags | ${title}`} />
      <div>
        <div>
          <div style={{ marginBottom: "6rem" }}>
            <h1>Tags</h1>
            <ul style={{ listStyle: "none" }}>
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Chip
                    label={`${tag.fieldValue} (${tag.totalCount})`}
                    variant="outlined"
                    onClick={() =>
                      navigate(`/tags/${kebabCase(tag.fieldValue)}/`)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
