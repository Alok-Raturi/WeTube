import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_BUTTONLIST_API, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../store/searchResultsSlice";

const SearchComponent = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.searchResults.results);

  const videos = async () => {
    const results = await fetch(YOUTUBE_BUTTONLIST_API + param.query);
    const json = await results.json();
    dispatch(setSearchResults(json.items));
  };

  useEffect(() => {
    videos();
  }, []);

  return (
    results && (
      <div className="w-screen">
        <div className=" w-[80%] mx-auto my-4 ">
          {results.map((video) => {
            if (video.id.kind === "youtube#channel") return <></>;
            return (
              <Link
                key={video.id.videoId}
                to={`/watch/${video.id.videoId}`}
                className="flex my-3 w-full p-4 shadow-xl cursor-pointer rounded-xl"
              >
                <img
                  className="h-50 object-cover"
                  src={video.snippet.thumbnails.medium.url}
                  alt=""
                />
                <div className="flex flex-col ml-2">
                  <p className="text-xl">{video.snippet.title}</p>
                  <p className="text-md"> 👹 {video.snippet.channelTitle}</p>
                  <p className="text-sm my-3"> {video.snippet.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
};

export default SearchComponent;
