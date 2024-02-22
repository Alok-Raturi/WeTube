import { useDispatch } from "react-redux";
import { YOUTUBE_API } from "../utils/constants";
import { useEffect } from "react";
import { setHomeVideo } from "../store/homeVideoSlice";

const useHomeVideos = () => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const video = await fetch(YOUTUBE_API);
    const videoJson = await video.json();
    dispatch(setHomeVideo(videoJson.items));
  };
  useEffect(() => {
    getVideo();
    //eslint-disable-next-line
  }, []);
};

export default useHomeVideos;
