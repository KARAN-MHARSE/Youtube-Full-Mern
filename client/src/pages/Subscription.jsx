import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SubscriptionVideoCard from "../components/SubscriptionVideoCard";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Subscription() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState();
  const { currentUser } = useSelector((state) => state);
  console.log(videos);

  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(
        `http://localhost:6060/api/v1/channel/subcription/subscribedchannel/videos/${currentUser._id}`
      );

      const data = await res.json();
      console.log(data);
      setVideos(data.video);
    };
    fetchVideo();
  }, []);
  return (
    <div className="w-full text-white">
      <h1 className={`${!videos && "hidden"} text-2xl font-bold mb-4`}>
        Latest
      </h1>
      {/* Video card */}
      <div className="">
        {videos ? (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <SubscriptionVideoCard video={video} />
            ))}
          </div>
        ) : (
          <div className="w-[full]">
            <div className="w-full h-[85vh] flex flex-col justify-center items-center">
              <div className="md:text-[250px] text-[200px]">
                <MdOutlineSubscriptions color="#ffffff" />
              </div>
              <h1 className="text-3xl font-bold">Don’t miss new videos</h1>
              <p className="text-sm font-semibold text-nowrap mt-1">
                Sign in to see updates from your favourite YouTube channels
              </p>
              <button
                onClick={() => navigate("/login")}
                className="my-5 border-2 border-zinc-600 px-3 py-1 rounded-3xl"
              >
                <p className="flex items-center gap-2 text-lg text-blue-500">
                  <FaRegUserCircle /> SignIn
                </p>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscription;
