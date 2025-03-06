import React from "react";
import VideoModal from "../Modals/VideoModal";

function ReviewCard({ user, txt, handleVid, handleUser }) {
  const openVid = () => handleVid;
  return (
    <div>
      <div
        className="flex flex-col justify-end min-h-[80vh] min-w-[90vw] mb-5 rounded-4xl px-8 pb-8 md:max-h-[20vh] md:min-w-[35vw] cursor-pointer bg-black bg-cover bg-center"
        style={{ backgroundImage: `url('/clients/thumbnails/${user.thumbnail}.svg')` }}
        onClick={openVid()}
      >
        <div className="flex flex-col items-start">
          <p className="text-white font-bold w-full text-right">{user.name}</p>
        </div>
        <p className="text-white font-bold text-right">{txt}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
