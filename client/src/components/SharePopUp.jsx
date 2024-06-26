import { ImCancelCircle } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function SharePopUp() {
  const params = useParams();
  const url = `https://youtube-full-mern-1.onrender.com/watch/${params.id}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert("Url copied succesfully");
    });
  };

  return (
    <div
      className={`bg-[#4e4e4e] px-4 py-4 rounded-xl text-roboto max-w-[300px]`}
    >
      {/* header */}
      <div className="flex justify-between border-b ">
        <h1 className="font-bold">Share Video</h1>
        <ImCancelCircle size="20" />
      </div>
      <p className="text-sm my-1">Share the video link via</p>
      {/* share options */}
      <div className="flex justify-between">
        <Link to={`https://wa.me/?text=${url}`}>
          <div className="border-2 p-1 rounded-full hover:text-green-600 hover:border-green-600">
            <FaWhatsapp />
          </div>
        </Link>
        <Link to={`instagram.com`}>
          <div className="border-2 p-1 rounded-full hover:text-red-500 hover:border-red-500">
            <FaInstagram />
          </div>
        </Link>
        <Link
          to={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            url
          )}`}
        >
          <div className="border-2 p-1 rounded-full hover:text-blue-500 hover:border-blue-500">
            <CiTwitter />
          </div>
        </Link>
        <Link
          to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
        >
          <div className="border-2 p-1 rounded-full hover:text-purple-600 hover:border-purple-600">
            <FaFacebookF />
          </div>
        </Link>
      </div>
      {/* or copy link */}
      <div>
        <h1 className="text-sm mb-1 mt-3">or copy link</h1>
        <div className=" flex items-center gap-2  px-2 py-1 border rounded-lg">
          <p className="line-clamp-1">{url}</p>
          <button
            onClick={copyUrl}
            className="bg-zinc-900 px-1 rounded-sm text-center"
          >
            copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default SharePopUp;
