import React from "react";
import Content, { HTMLContent } from "./Content";
import { kebabCase } from "lodash";
import { navigate } from "gatsby";
import happyFace from "../img/happy-face.svg";
import sadFace from "../img/sad-face.svg";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

export default function FAQ({ question, answer, tags = [], isPreview }) {
  const AnswerComponent = isPreview ? Content : HTMLContent;
  return (
    <div>
      {question && <Typography variant="h4">{question}</Typography>}
      {answer && <AnswerComponent content={answer} />}
      <ul style={{ listStyle: "none" }}>
        {tags.map(tag => (
          <li key={tag}>
            <Chip
              label={tag}
              variant="outlined"
              onClick={() => navigate(`/tags/${kebabCase(tag)}/`)}
            />
          </li>
        ))}
      </ul>
      <span style={{ cursor: "pointer" }}>
        <img
          src={happyFace}
          alt="helpful"
          onClick={() => window.parent.postMessage("positive feedback")}
        />
      </span>
      <span style={{ cursor: "pointer" }}>
        <img
          src={sadFace}
          alt="unhelpful"
          onClick={() => window.parent.postMessage("negative feedback")}
        />
      </span>
    </div>
  );
}
