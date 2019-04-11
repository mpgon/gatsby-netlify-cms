import React from "react";
import PropTypes from "prop-types";
import { FAQ } from "../../templates/faq";

const FAQPreview = ({ entry, widgetFor }) => {
  const question = entry.getIn(["data", "title"]) || "";
  const answer = entry.getIn(["data", "answer"]) || "";

  return <FAQ question={question} answer={answer} />;
};

FAQPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default FAQPreview;
