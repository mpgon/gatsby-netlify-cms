import React from "react";
import Content, { HTMLContent } from "./Content";

export default function FAQ({ question, answer, isPreview }) {
  const AnswerComponent = isPreview ? Content : HTMLContent;
  return (
    <div>
      <h1>
        <b>Question: </b>
        {question}
      </h1>
      <h1>
        <b>Answer: </b>
      </h1>
      <AnswerComponent content={answer} />
    </div>
  );
}
