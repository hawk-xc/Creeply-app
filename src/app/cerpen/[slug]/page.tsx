"use client";

import useSWR from "swr";
import React from "react";
import { useParams } from "next/navigation";
import { RiHeart2Line } from "@remixicon/react";
import Image from "next/image";
import cerpenType from "@/types/cerpenType";
import Loading from "./loading";
import Error from "@/components/Error";

const fetcher = async (url: string): Promise<cerpenType> => {
  const response = await fetch(url).then((res) => res.json());

  return (await response).data;
};

const StoryDetailPage: React.FC = (): React.JSX.Element => {
  // const baseUrl = "https://creeply.vercel.app/api";
  const baseUrl = "http://localhost:3000/api";
  const { slug } = useParams();
  const { data, error } = useSWR(`${baseUrl}/cerpen/story/${slug}`, fetcher);

  if (error) return <Error />;
  if (!data) return <Loading />;

  return (
    <div className="default-screen max-sm:pt-2 flex flex-col gap-5">
      <div id="cerpen-header" className="flex flex-row gap-2">
        <Image
          src={data?.image}
          alt={data?.title}
          width={100}
          height={100}
          className="object-cover rounded-md md:w-52 shadow-sm max-sm:w-32"
        />
        <div className="p-2 flex justify-between flex-col">
          <div className="flex flex-col gap-2">
            <h3 className="font-bold md:text-2xl">{data.title}</h3>
            <span className="max-sm:text-xs md:text-md">
              Author : <span className="text-blue-500">{data.author}</span>
            </span>
            <span className="badge badge-ghost">Horror story</span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <RiHeart2Line className="w-5" /> {data.likes}
          </div>
        </div>
      </div>
      <div id="cerpen-tags" className="flex flex-col gap-2">
        <span className="text-xl">Tags</span>
        <div className="flex flex-row gap-3">
          {data.tags?.map((tag: string, index: number) => (
            <span key={index} className="badge badge-ghost text-blue-500">
              {tag}
            </span>
          ))}
        </div>
        <hr className="my-3" />
      </div>
      <div id="cerpen-content" className="flex flex-col gap-4">
        {data.synopsys?.map((text: string, index: number) => (
          <div key={index}>
            <h4 className="text-lg font-bold">Chapter {index + 1}</h4>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryDetailPage;
