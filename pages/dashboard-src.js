import React from "react";
import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = response.json();
  return data;
};
const DashBoardSrc = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "An Error";
  if (!data) return "Loading ....";

  return (
    <>
      <h2>DashBoard</h2>
    </>
  );
};

export default DashBoardSrc;
