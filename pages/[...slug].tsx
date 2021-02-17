import * as React from "react";

type QueryType = {
  query: {
    selected?: string;
  };
};

export const getServerSideProps = async ({ query }: QueryType) => {
  const dateString: string = query?.selected ?? "";
  const selectedDate = new Date(dateString);

  let onThisDayResponse;
  const day = selectedDate.getDay();
  const month = selectedDate.getMonth();

  await fetch(
    `https://en.wikipedia.org/api/rest_v1/feed/onthisday/all/${month}/${day}`
  )
    .then((response) => response.json())
    .then((data) => (onThisDayResponse = data));

  console.log(onThisDayResponse);

  return {
    props: {
      dateString,
      onThisDayResponse,
    },
  };
};

interface CalendarDateProps {
  dateString: string;
}

const CalendarDate = (props: CalendarDateProps) => {
  return (
    <>
      <h1>Welcome to {props.dateString}</h1>
      <div>
        {props.onThisDayResponse.selected[0].text}
      </div>
    </>
  );
};

export default CalendarDate;
