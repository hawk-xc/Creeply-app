"use server";

import React, { Suspense } from "react";
import Loading from "./loading";
import CerpenCard from "@/particles/CerpenCard";
import cerpenType from "@/types/cerpenType";
import SearchBar from "@/particles/SearchBar";
import Error from "@/components/Error";

const fetchData = async () => {
  const data = await fetch("https://creeply.vercel.app/api/cerpen", {
    cache: "no-cache",
  }).then((result) => result.json());

  if (!data) return false;

  return (await data).data;
};

const HomePage: React.FC = async (): Promise<React.JSX.Element> => {
  return (
    <div className="default-screen">
      <h1 className="text-2xl font-extrabold mb-5 text-blue-600">Home Page</h1>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <DataContent />
      </Suspense>
    </div>
  );
};

const DataContent = async () => {
  const cerpenData = await fetchData();

  if (!cerpenData) return <Error />;

  return (
    <div className="max-sm:flex max-sm:flex-col gap-5 md:grid md:grid-cols-2">
      {cerpenData?.map((item: cerpenType, index: number) => (
        <CerpenCard {...item} key={index} />
      ))}
    </div>
  );
};

export default HomePage;
