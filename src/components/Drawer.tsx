"use server";

import React from "react";
import Link from "next/link";
import {
  RiMenuFill,
  RiBookShelfLine,
  RiMessage3Line,
  RiCustomerService2Fill,
  RiGooglePlayFill,
} from "@remixicon/react";

const Drawer: React.FC = (): React.JSX.Element => {
  return (
    <div className="drawer drawer-end z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn-square btn btn-ghost"
        >
          <RiMenuFill size={24} className="text-base-content" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 text-lg text-base-content min-h-full w-80 p-10 flex flex-col gap-3">
          <li>
            <button className="btn rounded-full from-blue-400 to-blue-600 bg-gradient-to-br w-full text-white font-bold text-2xl flex text-center align-middle items-center">
              Sign in
            </button>
          </li>
          <li>
            <Link href="/cerpen">
              <RiBookShelfLine /> Library
            </Link>
          </li>
          <li>
            <a>
              <RiMessage3Line /> Messages
            </a>
          </li>
          <li>
            <a>
              <RiCustomerService2Fill /> Help Center
            </a>
          </li>
          <li>
            <a>
              <RiGooglePlayFill /> Get the App
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
