import React from "react";
import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = response.json();
  return data;
};
const DashBoardSwr = () => {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) return "An Error";
  if (!data) return "Loading ....";
  console.log(data);
  return (
    <>
      <h2>DashBoard</h2>
      <h2>{data.id}</h2>
      <h2>{data.title}</h2>
    </>
  );
};

export default DashBoardSwr;
