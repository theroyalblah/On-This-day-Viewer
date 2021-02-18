import * as React from "react";
import OnThisDay from '../components/onThisDay';
import { wikiResponse } from '../types/wikitypes';

type QueryType = {
  query: {
    selected?: string;
  };
};

export const getServerSideProps = async ({ query }: QueryType) => {
  const dateString: string = query?.selected ?? "";
  const date = new Date(dateString);
  let onThisDayResponse;

  const day = date.getDate();

  // Someone thought it would be funny to zero index months but not days
  // so 1 needs to be added here to make any sense.
  const month = date.getMonth() + 1;

  await fetch(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`
  )
    .then((response) => response.json())
    .then((data) => (onThisDayResponse = data));

  return {
    props: {
      dateString,
      onThisDayResponse,
    },
  };
};

interface CalendarDateProps {
  dateString: string;
  onThisDayResponse: wikiResponse;
}

const CalendarDate = (props: CalendarDateProps) => {
  return (
    <>
      <h1>Welcome to {props.dateString}</h1>
      <OnThisDay response={props.onThisDayResponse} />
    </>
  );
};

export default CalendarDate;
