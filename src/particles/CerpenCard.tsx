"use client";

import cerpenType from "@/types/cerpenType";
import Image from "next/image";
import { RiUserLine, RiHeart2Line } from "@remixicon/react";

const CerpenCard: React.FC<cerpenType> = ({ props }): React.JSX.Element => {
  return (
    <div id={`card-${props.id}`} className="flex flex-row gap-5">
      <Image
        src={props.image}
        alt={props.title}
        width={100}
        height={100}
        className="object-cover rounded-md"
      />
      <div>
        <h3 className="font-extrabold">{props.title}</h3>
        <span className="text-sm">
          {props?.synopsys[0]?.length > 200
            ? `${props.synopsys[0].slice(0, 200)}...`
            : props.synopsys[0]}{" "}
        </span>
        <span className="flex flex-row gap-2 mt-5 text-sm">
          <RiUserLine /> {props.author}
        </span>
        <span className="flex flex-row gap-2 text-sm">
          <RiHeart2Line /> {props.likes}
        </span>
      </div>
    </div>
  );
};

export default CerpenCard;
