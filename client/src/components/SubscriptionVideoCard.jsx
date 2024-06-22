import React from "react";
import { Link } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";

function SubscriptionVideoCard({ video }) {
  console.log(video._id);
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  return (
    <Link to={`/watch/${video?._id._id}`}>
      <div className="text-lightText hover:bg-gray-500 rounded-xl overflow-hidden lg:max-w-[400px] lg:h-[270px] sm:max-w-[280px] max-w-[250px] pl-5 sm:pl-0">
        <img
          className=" w-full lg:h-[190px] md:h-[140px] object-contain"
          src={video?._id.thumbnailUrl}
          alt="Hii"
        />
        <div className="flex mt-2 gap-2">
          <div className="bg-blue-400 w-[35px] h-[35px] flex-nowrap rounded-full flex items-center justify-center ">
            <h1 className="text-white font-bold whitespace-nowrap">
              {video._id.ownerProfile}
            </h1>
          </div>
          <div>
            <h2 className="text-white text-[14px] line-clamp-2">
              {video._id.title}
            </h2>
            <p className="text-[13px] -mt-[3px]">{video._id.ownerName}</p>
            <p className="text-[13px] -mt-[3px]">
              32k views - <span>{formatDate(video._id.createdAt)}</span>
            </p>
          </div>
          <SlOptionsVertical color="white" />
        </div>
      </div>
    </Link>
  );
}

export default SubscriptionVideoCard;
