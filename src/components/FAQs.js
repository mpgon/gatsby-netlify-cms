import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery, navigate } from "gatsby";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

function FAQs({ data }) {
  const { edges: faqs } = data.allMarkdownRemark;
  return (
    <div>
      {faqs.map(
        ({
          node: {
            id,
            html,
            frontmatter: { question, tags },
            fields: { slug },
          },
        }) => (
          <Card
            key={id}
            style={{ margin: "30px 200px 0px 200px" }}
            onClick={() => navigate(slug)}
          >
            <CardActionArea>
              <CardContent>
                <Typography variant="h6">{question}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ),
      )}
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
              fields {
                slug
              }
              excerpt(pruneLength: 400)
              id
              html
              frontmatter {
                question
                tags
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FAQs data={data} count={count} />}
  />
);
