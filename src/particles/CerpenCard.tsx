"use client";

import React, { useState, useEffect } from 'react';
import cerpenType from "@/types/cerpenType";
import Image from "next/image";
import { RiUserLine, RiHeart2Line } from "@remixicon/react";
import { useRouter } from 'next/navigation';

const CerpenCard: React.FC<cerpenType> = (props): React.JSX.Element => {
  const { push } = useRouter();
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    }

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const minimizeText = (text: string) => {
    if (text?.length > 10) {
      if (mobileView) {
        return text?.slice(0, 70) + "...";
      } else {
        return text?.slice(0, 200) + "...";
      }
    }
    return text;
  };

  const handleClick = (url: string): void => {
    push(url);
  }

  return (
    <div id={`card-${props.id}`} className="flex flex-row gap-5 cursor-pointer hover:brightness-90" onClick={() => handleClick(`/cerpen/${props.slug}`)}>
      <Image
        src={props.image}
        alt={props.title}
        width={100}
        height={100}
        className="object-cover rounded-md w-32 max-sm:w-40 max-sm:h-40"
      />
      <div>
        <h3 className="font-extrabold">{props.title}</h3>
        <span className="text-sm">
          {minimizeText(props?.synopsys[0])}
        </span>
        <span className="flex flex-row text-blue-500 gap-2 mt-5 text-sm">
          <RiUserLine className="w-4 h-4" /> {props.author}
        </span>
        <span className="flex flex-row text-blue-500 gap-2 text-sm">
          <RiHeart2Line className="w-4 h-4" /> {props.likes}
        </span>
      </div>
    </div>
  );
};

export default CerpenCard;
