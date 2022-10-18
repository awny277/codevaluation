import Link from "next/link";
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
  const DisplayData = data.map((ele, idx) => {
    return (
      <div key={idx}>
        <h2>{ele.title}</h2>
      </div>
    );
  });
  return (
    <>
      <h2>DashBoard</h2>
      <Link href={"/"}> Back to Home</Link>
      {DisplayData}
    </>
  );
};

export default DashBoardSwr;
