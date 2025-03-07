import React from "react";

const VideoModal = ({ handleVid, user }) => {
  const close = () => handleVid;
  return (
    <div className="w-full h-screen backdrop-blur-md z-50 fixed inset-0">
      <div className="w-[90%] h-[90%] flex-grow overflow-y-auto px-10 py-8 rounded-3xl bg-black fixed mx-auto my-auto inset-0 z-50 flex flex-col items-center">
        <div className="flex flex-row justify-end w-full">
          <div className="rounded-full h-8 w-8 p-2 bg-[#DB2E10] mb-8 cursor-pointer">
            <img src="assets/close.svg" onClick={close()} />
          </div>
        </div>
        <p className="text-2xl text-center">قصة {user.name}</p>
        <div className="w-full h-auto px-1 py-1 mt-6 ">
          <iframe
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={user.video}
            title="Coach Mahmoud Nasr Intro"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
        </div>
        <p className="text-xl mt-5">شوف نتايج {user.name}</p>
        <img
          className="mt-4"
          src={`clients/transformation/${user.thumbnail}.svg`}
          alt="transformation-pic"
        ></img>
      </div>
    </div>
  );
};

export default VideoModal;
