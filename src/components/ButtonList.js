import React, { useEffect } from "react";
import Button from "./Button";
import { YOUTUBE_BUTTONLIST_API } from "../utils/constants";

const buttonTitle = [
  "All",
  "popular",
  "programming",
  "news",
  "music",
  "sports",
  "gaming",
  "live",
  "trending",
  "shorts",
  "movies",
  "fashion",
  "learning",
  "360",
  "DIY",
  "youtube",
  "Pop",
  "Rock",
  "Reactions",
];

const ButtonList = () => {
  return (
    <div className="flex  px-3 py-2 overflow-x-scroll w-full no-scrollbar">
      {buttonTitle.map((title) => (
        <Button key={title} title={title} home={true} />
      ))}
    </div>
  );
};

export default ButtonList;
