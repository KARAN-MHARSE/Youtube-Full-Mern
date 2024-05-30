import React, { useEffect, useState } from "react";
import YouHeader from "../components/YouHeader";
import { useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import "./Home.css";

function You() {
  const { currentUser } = useSelector((state) => state);
  const [userData, setUserData] = useState();
  // console.log(userData.user[0].watchVideos);

  useEffect(() => {
    if (currentUser) {
      const start = async () => {
        const res = await fetch(
          `http://localhost:6060/api/v1/user/auth/getUserDetail/${currentUser._id}`
        );
        const data = await res.json();
        // console.log(data);
        // console.log(data.user[0].watchVideos);
        setUserData(data);
      };
      start();
    }
  }, []);

  return (
    <div className="w-full overflow-y-auto hideScrollbar mb-5 px-2">
      {userData ? (
        <div>
          <YouHeader user={userData} />
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-full">
          <h1 className="text-3xl text-red-500 font-semibold">
            Please Login First to access this page
          </h1>
        </div>
      )}

      {/* VideoCards */}
      {userData && (
        <div className="grid grid-cols-4 gap-4 mt-5 place-items-center">
          {userData.user[0].watchVideos.map((video, index) => (
            <VideoCard video={video} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default You;
