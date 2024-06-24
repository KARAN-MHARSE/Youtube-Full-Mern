import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { BsBroadcast } from "react-icons/bs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { setIsSignInPage } from "../redux/user/userSlice";
import { VscSignOut } from "react-icons/vsc";
import { IoMdArrowRoundBack } from "react-icons/io";

function Header() {
  const [smallScreenSearch, setSmallScreenSearch] = useState(true);
  // console.log(smallScreenSearch);
  const [searchInput, setSearchInput] = useState();
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(user)

  const [uploadPopUp, setUploadPopUp] = useState(false);
  const [showProfikePopUp, setShowProfilePopUp] = useState(false);

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
      setUser(data.user[0]);
      // console.log();
    };
    start();
  }, []);

  // When user click on any thing expent login button then setIsSign false
  const setIsLogin = (e) => {
    e.preventDefault();
    navigate("/");
    dispatch(setIsSignInPage(false));
  };

  const handleSignOut = (e) => {
    e.preventDefault();

    dispatch(signInSuccess(false));
    setShowProfilePopUp(false);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("query", searchInput);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  // console.log(uploadPopUp)
  return (
    <div className="px-4 sm:px-6 py-2 flex justify-between items-center bg-[#10131A] sticky top-0 left-0">
      <Link to="/">
        <div onClick={setIsLogin} id="logo" className={` flex items-center`}>
          <img
            className={` sm:w-[51px]  w-[32px]`}
            src="https://static.vecteezy.com/system/resources/previews/023/986/704/large_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
            alt=""
          />
          <h1
            className={` text-white font-bold font-roboto sm:text-2xl md:text-3xl `}
          >
            YouTube
          </h1>
        </div>
      </Link>
      {/* Middle part */}
      <div id="middle" className="flex items-center gap-3">
        <div
          className={`${
            smallScreenSearch ? "inline-block" : "hidden"
          } sm:flex lg:w-[420px] md:w-[350px] sm:[300px] w-[160px]  items-center border border-lightText rounded-2xl overflow-hidden`}
        >
          <form onSubmit={handleSearch} className="flex">
            <input
              onSubmit={() => alert("Hello")}
              className="bg-transparent  text-semibold text-white outline-none mx-3 my-1 "
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search"
            />
            <div
              className={` bg-lightText w-12 h-[33px] flex items-center justify-center md:relative left-[167px]`}
            >
              <BiSearch color="white" size="22px" />
            </div>
          </form>
        </div>
        <div className="hidden sm:flex size-[33px] bg-lightText  items-center justify-center rounded-full">
          <MdKeyboardVoice color="white" size="22px" />
        </div>
      </div>
      {/* Righgt */}
      <div className="flex items-center gap-6">
        {/* For small devices a search icon */}
        <div
          onClick={() => setSmallScreenSearch(!smallScreenSearch)}
          className={`
          } sm:hidden cursor-pointer`}
        >
          <BiSearch color="white" size="25px" />
        </div>
        <AiOutlineVideoCameraAdd
          color="white"
          size="25px"
          onClick={() => {
            setUploadPopUp(!uploadPopUp);
          }}
        />
        {/* when user click on add video popup */}
        <div
          className={`bg-[#282828] text-white text-[15px] p-3 absolute top-14 rounded-lg ${
            !uploadPopUp && "hidden"
          }`}
        >
          <Link to="/upload">
            <p
              onClick={() => {
                setUploadPopUp(!uploadPopUp);
              }}
              className="flex items-center gap-2 "
              href=""
            >
              <GoVideo />
              Upload Video
            </p>
          </Link>
          <Link to="/live">
            <p
              onClick={() => {
                setUploadPopUp(!uploadPopUp);
              }}
              className="flex items-center gap-2 "
              href=""
            >
              <BsBroadcast />
              Go live
            </p>
          </Link>
        </div>
        {/* End of popup */}
        <IoMdNotificationsOutline color="white" size="25px" />
        {user ? (
          <div>
            <div
              onClick={() => {
                setShowProfilePopUp(!showProfikePopUp);
              }}
              className="text-white font-semibold cursor-pointer bg-blue-500 size-[35px] flex items-center justify-center rounded-full"
            >
              <p>{user.userName.charAt(0).toUpperCase()}</p>
            </div>
            {/* show profile popup */}
            {showProfikePopUp && (
              <div className="absolute top-[72px] right-5 bg-cardBg p-3 rounded-lg">
                <Link to="/you">
                  <p className="flex gap-2 items-center text-[18px] mb-2 text-white font-semibold hover:text-red-700">
                    <GoVideo />
                    You
                  </p>
                </Link>
                <p
                  onClick={handleSignOut}
                  className="flex gap-2 items-center text-[18px] text-white font-semibold hover:text-red-700"
                >
                  <VscSignOut />
                  SignOut
                </p>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button
              onClick={() => {
                dispatch(setIsSignInPage(true));
              }}
              className="bg-red-600 px-3 py-1 rounded-lg text-white font-semibold"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
