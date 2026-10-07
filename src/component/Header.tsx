
import React from "react";
import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="px-4 py-4">
      <div className="relative flex items-center justify-center bg-white p-4">
        {/* Logo + Title + Date - Center */}
        <div className="flex items-center gap-3 text-center">
          <Image
            src="/logo.webp"
            alt="Logo"
            width={64}
            height={64}
            className="h-16 w-16"
          />

          <div>
            <h2 className="text-xl font-bold">Bangla News 24</h2>

            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>

        {/* Buttons - Right Side */}
        <div className="absolute right-4 flex items-center gap-2">
          <button className="btn btn-active rounded-xl  border-0 bg-white hover:text-red-700">
            সাইন ইন
          </button>

          <button className="btn btn-active rounded-xl  bg-red-700 text-white">
            সাইন আপ
          </button>
        </div>
      </div>

      <Navlinks />

    </header>
  );
};

export default Header;
