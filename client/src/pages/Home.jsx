import FilterCard from "../components/FilterCard";
import VideoCard from "../components/VideoCard";
import { contectType } from "../constant";
import { Link, useLocation } from "react-router-dom";

import "./Home.css";
import { useEffect, useState } from "react";

function Home() {
  const location = useLocation();
  // console.log(search);
  let [videos, setVideos] = useState();
  // console.log(videos);
  useEffect(() => {
    const urlparams = new URLSearchParams(window.location.search);
    const search = urlparams.get("query");
    if (search == "" || search == null || search == "All") {
      const getAllVideos = async () => {
        const res = await fetch(
          "https://youtube-full-mern-1.onrender.com/api/v1/user/video/getAllVideos",
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        setVideos(data.video);
        // console.log(data.video)
      };
      getAllVideos();
    } else {
      const getSearchVideoes = async () => {
        const res = await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideos/search/${search}`
        );
        const data = await res.json();
        setVideos(data.video);
      };
      getSearchVideoes();
    }
  }, [location]);

  return (
    <div className="w-full overflow-y-auto hideScrollbar">
      <div className="flex gap-3 overflow-x-auto hideScrollbar flex-shrink-0 mb-5 ">
        {contectType.map((data, index) => (
          <FilterCard data={data} />
        ))}
      </div>
      <div className=" grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-5 place-items-center mr-5">
        {videos?.map((v) => (
          // console.log(v)
          <VideoCard video={v} />
        ))}
      </div>
    </div>
  );
}

export default Home;
