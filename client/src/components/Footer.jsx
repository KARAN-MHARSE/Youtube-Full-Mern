import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GoVideo } from "react-icons/go";

function Footer() {
  return (
    <div className="w-full fixed bottom-0 px-4 py-2  flex justify-between  border-t bg-[#10131A] border-zinc-700 sm:hidden">
      <Link to="/">
        <p className="text-white flex flex-col items-center text-bold text-sm">
          <AiFillHome size="23" />
          Home
        </p>
      </Link>
      <Link to="/shorts">
        <p className="text-white flex flex-col items-center text-bold text-sm">
          <SiYoutubeshorts size="23" />
          Shorts
        </p>
      </Link>
      <Link to="/subscription">
        <p className="text-white flex flex-col items-center text-bold text-sm">
          <MdSubscriptions size="23" />
          Subscriptions
        </p>
      </Link>
      <Link to="/you">
        <p className="text-white flex flex-col items-center text-bold text-sm">
          <GoVideo size="23" />
          Library
        </p>
      </Link>
    </div>
  );
}

export default Footer;
