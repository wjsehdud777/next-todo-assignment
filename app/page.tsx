import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/detail"}>Detail Page</Link>
    </div>
  );
};

export default HomePage;
