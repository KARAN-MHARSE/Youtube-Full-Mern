function YouHeader({ user }) {
  // console.log();
  return (
    <div className="text-white">
      <div className="flex gap-3 items-center">
        <div className="bg-blue-500 size-16 rounded-full flex items-center justify-center text-[30px] font-semibold">
          <p>{user.user[0].userName.charAt(0).toUpperCase()}</p>
        </div>
        <div>
          <h1 className="text-xl font-bold">{user?.user[0].userName}</h1>
          <p className="text-[#ffffff80] text-[14px]">
            {user.user[0].subscriptions.length} subscribers
          </p>
          <div className="flex gap-5 mt-1">
            <button className="bg-cardBg py-1 px-2 rounded-lg">
              Uploaded videos
            </button>
            <button className="bg-cardBg py-1 px-2 rounded-lg">
              Subscribes List
            </button>
          </div>
        </div>
      </div>
      <p className="text-lg font-semibold">History</p>
    </div>
  );
}

export default YouHeader;
