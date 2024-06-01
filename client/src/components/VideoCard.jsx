import { SlOptionsVertical } from "react-icons/sl";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  console.log(video);
  // console.log(video.createdAt);

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  // console.log(formatDate(1));

  return (
    <Link to={`/watch/${video?._id}`}>
      <div className="text-lightText hover:bg-gray-500 rounded-xl overflow-hidden lg:max-w-[400px] lg:h-[270px] sm:max-w-[280px] max-w-[250px] pl-5 sm:pl-0">
        <img
          className="rounded-lg w-full lg:h-[190px] md:h-[140px] object-contain"
          src={video?.thumbnailUrl}
          alt=""
        />
        <div className="flex mt-2 gap-2">
          <div className="min-w-[35px] h-[35px] bg-blue-500 rounded-full flex flex-nowrap items-center justify-center text-white text-semibold">
            <h1>{video.ownerProfile}</h1>
          </div>
          <div>
            <h2 className="text-white text-[14px] line-clamp-2">
              {video?.title}
            </h2>
            <p className="text-[13px] -mt-[3px]">{video.ownerName}</p>
            <p className="text-[13px] -mt-[3px]">
              32k views - <span>{formatDate(video.createdAt)}</span>
            </p>
          </div>
          <SlOptionsVertical color="white" />
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
