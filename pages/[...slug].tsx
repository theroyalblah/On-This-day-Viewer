import * as React from "react";

type QueryType = {
  query: {
    selected?: string
  }
}

export const getServerSideProps = ({ query }: QueryType) => {
  const selectedDate = query?.selected ?? null;

  return {
    props: {
      selectedDate,
    },
  };
};

interface CalendarDateProps {
    selectedDate: Date
}

const CalendarDate = (props: CalendarDateProps) => {
return <>Welcome to {props.selectedDate}</>;
};

export default CalendarDate;
