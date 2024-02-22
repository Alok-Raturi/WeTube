import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link
      to={`/watch/${video.id?.videoId || video?.id}`}
      className="w-[22%]  rounded-lg shadow-2xl m-2 p-3 cursor-pointer"
    >
      <div className="">
        <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail" />
      </div>
      <div className="">
        <h3 className="text-bold text-lg  p-1">{video.snippet.title}</h3>
        <p className="text-bold text-md p-1">
          Channel : {video.snippet.channelTitle}
        </p>
      </div>
      {video?.statistics?.viewCount && (
        <div>
          <h3>
            {Intl.NumberFormat("en", { notation: "compact" }).format(
              video.statistics.viewCount
            )}{" "}
            views
          </h3>
        </div>
      )}
    </Link>
  );
};

// to Learn Higher Order Component
export const AdsComponent = (VideoCard) => {
  return ({ info }) => {
    return (
      <div className="w-[22%]  rounded-lg shadow-2xl m-2 p-3 cursor-pointer border-2 border-black">
        <span className="bg-red-900 text-white px-3 py-2 rounded-lg">
          Advertisement
        </span>
        <VideoCard video={info} />
      </div>
    );
  };
};

export default VideoCard;
