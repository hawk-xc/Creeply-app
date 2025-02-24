"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import cerpenListType from "@/types/cerpenListType";
import Loading from "../loading";
import Error from "@/components/Error";

const fetcher = async (url: string): Promise<cerpenListType[]> => {
  const response = await fetch(url).then((res) => res.json());

  return (await response).items;
};

const CerpenPage: React.FC = (): React.JSX.Element => {
  const { data, error } = useSWR(
    "https://www.googleapis.com/books/v1/volumes?q=horror&printType=books",
    fetcher
  );

  if (!data) return <span>Load...</span>;
  if (error) return <Error />;

  console.log(data);

  return (
    <div className="default-screen">
      <h1 className="text-2xl font-extrabold mb-5 text-blue-600">
        Library Page
      </h1>
      Hello page
    </div>
  );
};

export default CerpenPage;
