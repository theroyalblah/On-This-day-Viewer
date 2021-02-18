import * as React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useRouter } from "next/router";
import 'react-calendar/dist/Calendar.css';

const Index = () => {
  const [value] = useState(new Date());
  const router = useRouter();

  const goToDatePage = (selectedDate: Date | Date[]) => {
    const stringDate = selectedDate.toString();
    router.push(`date?selected=${stringDate}`);
  };

  return (
    <>
      <h1>Select a day on the calendar to view what happened on that day in history</h1>
      <Calendar value={value} onChange={goToDatePage} />
    </>
  );
};

export default Index;
