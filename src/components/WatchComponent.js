import React, { useEffect } from "react";
import { closeSidebar } from "../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { YOUTUBE_COMMENTS_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { addComments, addWatchVideo } from "../store/watchSlice";
import Comments from "./Comments";

import Button from "./Button";

const WatchComponent = () => {
  const dispatch = useDispatch();
  const param = useParams();

  useEffect(() => {
    dispatch(closeSidebar());
    videos();
    comments();
  }, []);

  const toggleSidebar = useSelector((state) => state.home?.SidebarToggle);

  const videos = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + param.id);
    const data = await response.json();
    dispatch(addWatchVideo(data.items[0]));
  };

  const comments = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API + param.id);
    const data = await response.json();
    dispatch(addComments(data.items));
  };

  const video = useSelector((state) => state.watch?.watch);
  const recommendations = useSelector((state) => state.watch?.recommendations);
  if (!video) {
    return;
  }
  if (!recommendations) {
  }

  return (
    <div className={`col-span-11 ${!toggleSidebar && "col-span-12"}`}>
      <div className="grid grid-cols-12 w-[80%] mx-auto">
        <div className="col-span-8  p-2 m-3">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${param.id}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <p className="my-2 text-2xl font-semibold ">
            {" "}
            {video?.snippet?.title}
          </p>
          <Comments />
        </div>
        <div className="col-span-4 ">
          <h1 className="font-bold text-2xl p-2 m-2 text-center">
            Recommendations
          </h1>
          <div className="flex overflow-x-scroll w-full no-scrollbar">
            {video?.snippet?.tags?.map((tag, index) => {
              if (index >= 5) return <></>;
              return <Button key={tag} title={tag} home={false} />;
            })}
          </div>
          <div>
            {recommendations.map((video) => {
              return (
                <div key={video.id.videoId} className="flex my-3">
                  <img
                    className="w-24 h-24"
                    src={video.snippet.thumbnails.high.url}
                    alt=""
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-sm font-semibold">
                      {video.snippet.title}
                    </p>
                    <p className="text-xs">{video.snippet.channelTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchComponent;
