import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { IoDownloadOutline } from "react-icons/io5";
import { GiTakeMyMoney } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import { BiMoneyWithdraw } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DesciptionBox from "../components/DesciptionBox";
import { IoIosNotificationsOutline } from "react-icons/io";
import Comment from "../components/Comment";
import "../pages/Home.css";
import SharePopUp from "../components/SharePopUp";

function WatchVideo() {
  const { id } = useParams();
  console.log(id);
  const { currentUser, showSharePopup } = useSelector((state) => state);
  const [subscribed, setSubscribed] = useState(false);
  const [sharePopUp, setSharePopUp] = useState(false);
  const [videoData, setVideoData] = useState(null);
  console.log(videoData);
  const [videoList, setVideoList] = useState();
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

  console.log(subscribed);
  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };
  const handleSharePopUp = () => {
    dispatch();
  };

  useEffect(() => {
    const start = async () => {
      // get specific video by id
      const res = await fetch(
        `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideoByID/${id}`,
        {
          method: "post",
          credentials: "include",
        }
      );
      const data = await res.json();
      setVideoData(data);
      setSubscribed(data.video?.isSubscribed);

      // get all videos
      const res2 = await fetch(
        "https://youtube-full-mern-1.onrender.com/api/v1/user/video/getAllVideos"
      );
      const data2 = await res2.json();

      setVideoList(data2);
      // console.log(videoList);

      // add to watch  video
      if (currentUser) {
        const res3 = await fetch(
          `https://youtube-full-mern-1.onrender.com/api/v1/user/video/getVideoByID/watchVideo/${id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ currentUserId: currentUser._id }),
          }
        );
        const data3 = await res3.json({});
        // console.log(data3);
      }
    };
    start();
  }, [id]);

  const checkAndSubscribe = async (e) => {
    e.preventDefault();
    const subScriptionData = {
      ownerId: videoData.video.ownerID,
      currentUserId: currentUser._id,
    };

    const res = await fetch(
      "https://youtube-full-mern-1.onrender.com/api/v1/channel/subcription/doSubcribed",
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(subScriptionData),
      }
    );
    const data = await res.json();
    setSubscribed(!subscribed);
    alert(data.message);
  };

  const handleDownload = (videoLink) => {
    const link = document.createElement("a");
    link.href = videoLink;
    link.download = "video.jpg";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handleLike = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://youtube-full-mern-1.onrender.com/api/v1/like/${id}`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json", // Set the appropriate Content-Type header
        },
        body: JSON.stringify({ userId: currentUser._id }),
      }
    );
    const data = await res.json();
    alert(data.message);
  };

  const likeSendData = {
    commentBy: currentUser._id,
    videoId: id,
  };

  // const doLike = async()=>{
  //     const likeSendData = {
  //         commentBy:currentUser._id,
  //         comment:
  //     }
  //     const res3 = await fetch(`https://youtube-full-mern-1.onrender.com//api/v1/user/video//getVideoByID/${id}`,{
  //         method:"POST",
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:
  //     })
  // }

  return (
    <div className="text-white w-full h-full px-4">
      <div className="flex lg:flex-row flex-col gap-7">
        {/* Left Side */}
        {videoData && (
          <div className="lg:basis-[70%] ">
            <video
              autoPlay
              controls
              controlsList="nodownload"
              className="size-full rounded-lg max-h-[450px] object-contain bg-cardBg"
              src={videoData.video.videoUrl}
              alt=""
            />
            <h2 className="my-3 font-semibold">{videoData.video.title}</h2>
            {/* VideoInfo */}
            <div className="videoInfo flex flex-col sm:flex-row justify-between gap-3">
              <div className="flex justify-between  items-center gap-3">
                <div className="flex gap-2 items-center sm:justify-normal">
                  <div className="text-white font-semibold bg-blue-500 size-[30px] flex items-center justify-center rounded-full">
                    <p>{videoData.video.userName.charAt(0).toUpperCase()}</p>
                  </div>
                  <div>
                    <h1 className="text-[15px] font-semibold">
                      {videoData.video.userName}
                    </h1>
                    <p className=" text-[12px] text-[#ffffff80] whitespace-nowrap">
                      {videoData.video.totalSubscribers} Subscribers
                    </p>
                  </div>
                </div>
                <div>
                  {subscribed ? (
                    <button
                      onClick={checkAndSubscribe}
                      className="bg-cardBg text-sm font-semibold px-3 py-2 rounded-3xl flex items-center gap-1"
                    >
                      <IoIosNotificationsOutline size="18" />
                      Subscribed
                    </button>
                  ) : (
                    <button
                      onClick={checkAndSubscribe}
                      className="bg-cardBg text-sm font-semibold px-3 py-2 rounded-3xl"
                    >
                      Do subscribe
                    </button>
                  )}
                </div>
              </div>
              <div className="flex gap-3">
                <div
                  className="flex gap-1 bg-cardBg px-3 py-1  items-center rounded-[50px] cursor-pointer"
                  onClick={handleLike}
                >
                  <AiOutlineLike />
                  <p>14k</p>
                </div>
                <div
                  onClick={() => setSharePopUp(!sharePopUp)}
                  className=" cursor-pointer flex gap-1 bg-cardBg px-3  items-center rounded-[50px]"
                >
                  <RiShareForwardLine />
                  <p>Share</p>
                </div>
                <div
                  onClick={() => handleDownload(videoData.video.videoUrl)}
                  className="flex gap-1 bg-cardBg px-3  items-center  sm:flex rounded-[50px] cursor-pointer"
                >
                  <IoDownloadOutline />
                  <p>Download</p>
                </div>
                {/* <div className='flex gap-2 bg-cardBg px-3  items-center hidden sm:flex rounded-[50px]'>
                            <BiMoneyWithdraw/>
                            <p>Thanks</p>
                        </div> */}
                <div className="flex gap-2 bg-cardBg px-3  items-center rounded-[50px]">
                  <BsThreeDots />
                </div>
              </div>
              {/* Share popup---------------------------------------------------------------------------------------------- */}
              <div
                className={`absolute right-5 mt-16 ${
                  sharePopUp ? "inline-block" : "hidden"
                }`}
              >
                <SharePopUp />
              </div>
            </div>
            <DesciptionBox desc={videoData.video.description} />
            <Comment likeSendData={likeSendData} />
          </div>
        )}
        {/* --------------------------------------------------------------------------------------------------------------- */}
        {/* Right Side */}
        {videoList && (
          <div className="lg:basis:[25%] lg:max-w-[70vh] overflow-y-auto hideScrollbar ">
            {/* card */}
            {videoList.video.map((video) => (
              <div>
                <Link to={`/watch/${video._id}`}>
                  <div className="flex gap-3 mb-3">
                    <img
                      className="w-[50%] max-w-[280px] rounded-lg"
                      src={video.thumbnailUrl}
                      alt=""
                    />
                    <div className="">
                      <h1 className="line-clamp-2 font-semibold">
                        {video.title}
                      </h1>
                      <p className="text-[13px] text-[#ffffff80] mt-2">
                        {video.ownerName}
                      </p>
                      <div className="text-[13px] flex gap-2 text-[#ffffff80]">
                        <p>{video.watchCount} views .</p>
                        <p>{formatDate(video.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WatchVideo;
