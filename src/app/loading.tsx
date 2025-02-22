"use server";

import React from "react";

const Loading: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex w-[20rem] flex-row gap-4">
        <div className="skeleton h-32 w-52" />
        <div className="w-full flex flex-col gap-2">
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
        </div>
      </div>
      <div className="flex w-[20rem] flex-row gap-4">
        <div className="skeleton h-32 w-52" />
        <div className="w-full flex flex-col gap-2">
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
        </div>
      </div>
      <div className="flex w-[20rem] flex-row gap-4">
        <div className="skeleton h-32 w-52" />
        <div className="w-full flex flex-col gap-2">
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
        </div>
      </div>
      <div className="flex w-[20rem] flex-row gap-4">
        <div className="skeleton h-32 w-52" />
        <div className="w-full flex flex-col gap-2">
          <div className="skeleton h-4 w-28" />
          <div className="skeleton h-4 w-full" />
          <div className="skeleton h-4 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
