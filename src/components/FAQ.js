import React from "react";
import Content, { HTMLContent } from "./Content";
import { kebabCase } from "lodash";
import { Link } from "gatsby";

export default function FAQ({ question, answer, tags, isPreview }) {
  const AnswerComponent = isPreview ? Content : HTMLContent;
  return (
    <div>
      <p>{` =============== ${question} =============== `}</p>
      <AnswerComponent content={answer} />
      <p>Tags</p>
      <ul className="taglist">
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
