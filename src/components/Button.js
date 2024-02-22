import React from "react";
import { YOUTUBE_BUTTONLIST_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setHomeVideo } from "../store/homeVideoSlice";
import { addRecommendations } from "../store/watchSlice";

const Button = ({ title, home }) => {
  const dispatch = useDispatch();

  const handleClick = async (keyword) => {
    const data = await fetch(YOUTUBE_BUTTONLIST_API + keyword);
    const response = await data.json();
    if (home) dispatch(setHomeVideo(response.items));
    else dispatch(addRecommendations(response.items));
  };
  return (
    <div
      className="p-2 mx-2 my-1 bg-gray-300 rounded-lg cursor-pointer text-nowrap"
      onClick={() => handleClick(title)}
    >
      {title}
    </div>
  );
};

export default Button;
