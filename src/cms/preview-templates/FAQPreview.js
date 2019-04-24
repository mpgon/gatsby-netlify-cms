import React from "react";
import PropTypes from "prop-types";
import FAQ from "../../components/FAQ";

const FAQPreview = ({ entry, widgetFor }) => {
  const question = entry.getIn(["data", "question"]);
  const answer = widgetFor("body");
  const tags = entry.getIn(["data", "tags"]);

  return <FAQ question={question} answer={answer} tags={tags} isPreview />;
};

FAQPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FAQPreview;
