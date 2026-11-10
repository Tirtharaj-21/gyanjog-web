import React from "react";

export const SplitWords = ({ text }) =>
  text.split(" ").map((w, i) => (
    <React.Fragment key={i}>
      <span className="w" aria-hidden="true">
        <span style={{ "--i": i }}>{w}</span>
      </span>{" "}
    </React.Fragment>
  ));
