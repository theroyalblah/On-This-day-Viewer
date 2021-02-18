import * as React from "react";
import { wikiResponse } from "../types/wikitypes";
import Collapsible from "react-collapsible";

interface OnThisDayProps {
  response: wikiResponse;
}

const OnThisDay = (data: OnThisDayProps) => {
  const res = data.response;
  const selected = res.selected;
  const births = res.births;

  if (selected !== undefined) {
    return (
      <>
        <h2> On This Day </h2>
        {selected.map((element, i) => {
          return (
            <h3 key={i}>
              <a href={element.pages[0].content_urls.desktop.page}>
                {element.text}
              </a>
            </h3>
          );
        })}
        <h2>Births</h2>
        <Collapsible trigger="ᐯ">
          {births.map((element, i) => {
            return (
              <div key={i}>
                <a href={element.pages[0].content_urls.desktop.page}>
                  {element.text}
                </a>
              </div>
            );
          })}
        </Collapsible>
      </>
    );
  } else {
    return <h1>Look's like there's no data here. oops</h1>;
  }
};

export default OnThisDay;
