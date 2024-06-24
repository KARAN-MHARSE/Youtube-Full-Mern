import React, { useEffect, useState } from "react";
import YouHeader from "../components/YouHeader";
import { useSelector } from "react-redux";
import VideoCard from "../components/VideoCard";
import "./Home.css";
import { IoAlbumsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function You() {
  const { currentUser } = useSelector((state) => state);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  // console.log(userData.user[0].watchVideos);

  useEffect(() => {
    const start = async () => {
      const res = await fetch(
        "https://youtube-full-mern-1.onrender.com/api/v1/user/auth/getUserDetail",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const data = await res.json();
      console.log(data);
      // console.log(data.user[0].watchVideos);
      setUserData(data);
    };
    start();
  }, []);

  return (
    <div className="w-full overflow-y-auto hideScrollbar mb-5 px-2">
      {userData ? (
        <div>
          <YouHeader user={userData} />
        </div>
      ) : (
        <div className="w-[full] text-white">
          <div className="w-full h-[85vh] flex flex-col justify-center items-center">
            <div className="md:text-[250px] text-[200px]">
              <IoAlbumsOutline color="#ffffff" />
            </div>
            <h1 className="text-3xl font-bold">Enjoy your favorite videos</h1>
            <p className="text-sm font-semibold text-nowrap mt-1">
              Sign in to access videos that you’ve liked or saved
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
