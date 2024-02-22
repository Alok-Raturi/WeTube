import React from "react";
import ButtonList from "./ButtonList";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import useHomeVideos from "../hooks/useHomeVideos";
import { AdsComponent } from "./VideoCard";

const VideoContainer = () => {
  useHomeVideos();

  const videos = useSelector((state) => state.home?.homeVideo);
  const toggleSidebar = useSelector((state) => state.home?.SidebarToggle);

  if (videos == null) return;
  const AdsComp = AdsComponent(VideoCard);
  return (
    <div className={`col-span-11 ${!toggleSidebar && "col-span-12"}`}>
      <ButtonList />
      <div className="flex flex-wrap flex-row justify-evenly">
        {/* <AdsComponent info={videos[0]} /> */}
        <AdsComp info={videos[0]} />
        {videos.map((video) => (
          <VideoCard video={video} key={video.etag} />
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
