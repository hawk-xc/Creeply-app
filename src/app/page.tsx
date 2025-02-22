"use server";

import React, { Suspense } from "react";
import Loading from "./loading";
import CerpenCard from "@/particles/CerpenCard";
import cerpenType from "@/types/cerpenType";

const fetchData = async () => {
  const data = await fetch("http://localhost:3000/api/cerpen", {
    cache: "no-cache",
  }).then((result) => result.json());

  return (await data).data;
};

const HomePage: React.FC = async (): Promise<React.JSX.Element> => {
  return (
    <div className="bg-base-100 text-base-content md:px-52 md:pt-5 max-sm:px-5">
      <h1 className="text-2xl font-extrabold mb-5">Home Page</h1>
      <Suspense fallback={<Loading />}>
        <DataContent />
      </Suspense>
    </div>
  );
};

const DataContent = async () => {
  const cerpenData = await fetchData();

  return (
    <div className="flex flex-col gap-5">
      {cerpenData?.map((item: cerpenType, index: number) => (
        <CerpenCard {...item} key={index} />
      ))}
    </div>
  );
};

export default HomePage;
