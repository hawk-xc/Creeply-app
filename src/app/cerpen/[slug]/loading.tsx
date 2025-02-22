"use client";

import React from "react";

const Loading: React.FC = (): React.JSX.Element => {
  return (
    <div className="md:px-52 md:pt-5 max-sm:px-5 max-sm:pt-2">
      <div className="flex flex-row gap-3 w-full">
        <div className="skeleton h-72 w-52"></div>
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div className="w-full px-30 mt-10">
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div className="w-full px-30 mt-10">
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
      <div className="w-full px-30 mt-10">
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
