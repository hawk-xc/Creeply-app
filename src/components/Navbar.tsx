import React from "react";
import Image from "next/image";
import { RiMenuFill } from "@remixicon/react";

const Navbar: React.FC = (): React.JSX.Element => {
  return (
    <nav className="navbar bg-base-100 md:px-52">
      <div className="flex-1">
        <Image
          id="applogo"
          src="/Creeply.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <RiMenuFill size={24} className="text-base-content" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
