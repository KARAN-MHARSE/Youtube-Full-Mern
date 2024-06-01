import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SubscriptionVideoCard from "../components/SubscriptionVideoCard";

function Subscription() {
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
      <h1 className={`${!videos && "hidden"} text-2xl font-bold`}>Latest</h1>
      {/* Video card */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {videos ? (
          videos.map((video, index) => <SubscriptionVideoCard video={video} />)
        ) : (
          <div className="w-full">
            <h1 className=" text-center text-3xl text-nowrap text-red-500">
              Please subscribed first
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Subscription;
