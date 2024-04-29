import { BiSearch } from "react-icons/bi";
import { MdKeyboardVoice } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoVideo } from "react-icons/go";
import { BsBroadcast } from "react-icons/bs";
import {Link} from 'react-router-dom'
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import {setIsSignInPage} from '../redux/user/userSlice'


function Header() {
  const user = useSelector(state=>state.currentUser)
  const dispatch = useDispatch()
  console.log(user)
  
  // When user click on any thing expent login button then setIsSign false
  const setIsLogin = (e)=>{
    e.preventDefault();
    dispatch(setIsSignInPage(false));
  }

  const [uploadPopUp,setUploadPopUp] = useState(false)
  // console.log(uploadPopUp)
  return (
    <div className='px-4 sm:px-6 py-2 flex justify-between items-center bg-[#10131A] sticky top-0 left-0'>
      <Link to='/'>
        <div 
        onClick={setIsLogin}
        id='logo' 
        className='flex items-center'>
          <img className='sm:w-[51px]  w-[32px]' src="https://static.vecteezy.com/system/resources/previews/023/986/704/large_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png" alt="" />
          <h1 className='text-white font-bold font-roboto sm:text-2xl md:text-3xl '>YouTube</h1>
        </div>
      </Link>
      <div id='middle' className='flex items-center gap-3'>
        <div className='hidden sm:flex lg:w-[420px]  items-center border border-lightText rounded-2xl overflow-hidden'>
          <input
           className='bg-transparent  text-semibold text-white outline-none mx-3 my-1 '
           type="text"
           placeholder='Search'
          />
          <div className='bg-lightText w-12 h-[33px] flex items-center justify-center lg:relative left-[167px]'>
            <BiSearch color="white" size='22px'/>
          </div>
        </div>
        <div className='hidden sm:flex size-[33px] bg-lightText  items-center justify-center rounded-full'>
          <MdKeyboardVoice color="white" size='22px' />
        </div>
      </div>
      {/* Righgt */}
      <div className='flex items-center gap-6'>
        {/* For small devices a search icon */}
        <div className='sm:hidden cursor-pointer'>
          <BiSearch color="white" size='25px' />
        </div>
        <AiOutlineVideoCameraAdd 
          color="white" 
          size='25px'
          onClick={()=>{setUploadPopUp(!uploadPopUp)}}
        />
        {/* when user click on add video popup */}
        <div className={`bg-[#282828] text-white text-[15px] p-3 absolute top-14 rounded-lg ${!uploadPopUp && 'hidden'}`}>
          <Link to='/upload'>
            <p 
            onClick={()=>{setUploadPopUp(!uploadPopUp)}}
            className="flex items-center gap-2 "
            href="">
              <GoVideo/>
              Upload Video
            </p>
          </Link>
          <Link to='/live'>
            <p 
            onClick={()=>{setUploadPopUp(!uploadPopUp)}}
            className="flex items-center gap-2 "
            href="">
              <BsBroadcast />
              Go live
            </p>
          </Link>
        </div>
        {/* End of popup */}
        <IoMdNotificationsOutline color="white" size='25px'/>
        {
          user?
          (
            <div className="text-white font-semibold bg-blue-500 size-[35px] flex items-center justify-center rounded-full">
              <p>{user.profile}</p>
            </div>
          ):
          (
            <Link to='/login'>
              <button
              onClick={()=>{dispatch(setIsSignInPage(true))}}
                className="bg-red-600 px-3 py-1 rounded-lg text-white font-semibold"
              >Login</button>
            </Link>
          )
        }
        
      </div>
    </div>
  )
}

export default Header