import * as React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useRouter } from "next/router";

const Index = () => {
  const [value] = useState(new Date());
  const router = useRouter();

  const goToDatePage = (selectedDate: Date | Date[]) => {
    console.log(selectedDate.toString());
    const stringDate = selectedDate.toString();
    router.push(`date?selected=${stringDate}`);
  };

  return (
    <>
      <Calendar value={value} onChange={goToDatePage} />
      <h1>Hello Next.js 👋</h1>
    </>
  );
};

export default Index;
