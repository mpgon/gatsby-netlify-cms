import React from "react";
import Content, { HTMLContent } from "./Content";
import { kebabCase } from "lodash";
import { Link } from "gatsby";
import happyFace from "../img/happy-face.svg";
import sadFace from "../img/sad-face.svg";

export default function FAQ({ question, answer, tags = [], isPreview }) {
  const AnswerComponent = isPreview ? Content : HTMLContent;
  return (
    <div>
      {question && <p>{`Q> ${question}`}</p>}
      {answer && <AnswerComponent content={answer} />}
      <ul>
        {tags.map(tag => (
          <li key={tag}>
            <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
          </li>
        ))}
      </ul>
      <span>
        <img src={happyFace} alt="helpful" />
      </span>
      <span>
        <img src={sadFace} alt="unhelpful" />
      </span>
    </div>
  );
}
