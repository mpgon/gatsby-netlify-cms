import React from "react";
import Content, { HTMLContent } from "./Content";

export default function FAQ({ question, answer, isPreview }) {
  const AnswerComponent = isPreview ? Content : HTMLContent;
  return (
    <div>
      <p>{` =============== ${question} =============== `}</p>
      <AnswerComponent content={answer} />
    </div>
  );
}
