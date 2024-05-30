import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { GoVideo } from "react-icons/go";

function SideBar() {
  return (
    <div className="flex items-center text-white text-[12px] flex-col gap-6 md:gap-10 h-[100vh] px-2">
      <Link to="">
        <div className="flex flex-col items-center">
          <AiFillHome size="25" />
          <p>Home</p>
        </div>
      </Link>
      <Link to="/shorts">
        <div className="flex flex-col items-center">
          <SiYoutubeshorts size="25" />
          <p>Shorts</p>
        </div>
      </Link>
      <Link to="/subscription">
        <div className="flex flex-col items-center">
          <MdSubscriptions size="25" />
          <p>Subscriptions</p>
        </div>
      </Link>
      <Link to="/you">
        <div className="flex flex-col items-center">
          <GoVideo size="25" />
          <p>You</p>
        </div>
      </Link>
    </div>
  );
}

export default SideBar;
