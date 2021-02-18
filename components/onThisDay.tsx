import * as React from "react";
import { wikiResponse } from "../types/wikitypes";

interface OnThisDayProps {
  response: wikiResponse;
}

const OnThisDay = (data: OnThisDayProps) => {
  const res = data.response;
  const selected = res.selected;

  if (selected !== undefined) {
    return (
      <>
        <h2> Selected </h2>
        {selected.map((element, i) => {
          return <h3 key={i}>{element.text}</h3>;
        })}
      </>
    );
  } else {
    return <></>;
  }
};

export default OnThisDay;
