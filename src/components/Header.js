import React, { useEffect } from "react";
import { HamMenu, User, YOUTUBE_IMAGE } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/appSlice";
import {
  setSearch,
  setSuggestions,
  setFocus,
  setLRUCache,
} from "../store/searchSlice";
import { useNavigate, useNavigation } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const search = useSelector((state) => state.search.search);
  const suggestions = useSelector((state) => state.search.suggestions);
  const focus = useSelector((state) => state.search.focus);
  const LRUCache = useSelector((state) => state.search.LRUCache);

  const AutoCompleteApi = async () => {
    const res = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        search
    );
    const data = await res.json();
    dispatch(setSuggestions(data[1]));
    dispatch(setLRUCache({ [search]: data[1] }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (LRUCache[search]) {
        dispatch(setSuggestions(LRUCache[search]));
      } else {
        AutoCompleteApi();
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + search);
  };

  return (
    <div className="grid grid-flow-col p-3 m-2  shadow-xl rounded-xl">
      <div className="col-span-2 flex ">
        <img
          src={HamMenu}
          alt="Hamburger Menu"
          className="h-10 object-cover cursor-pointer "
          onClick={handleToggleSidebar}
        />
        <img src={YOUTUBE_IMAGE} alt="Youtube " className="h-10 object-cover" />
      </div>
      <div className="col-span-8">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            onFocus={() => dispatch(setFocus(true))}
            className="px-3 py-2 border-black border-2 w-3/4 rounded-l-full"
          />
          <button
            className="px-5 py-2 w-3/10 border-2 border-black border-l-0 rounded-r-full bg-gray-300"
            type="submit"
          >
            😀
          </button>
        </form>
        {focus && suggestions.length !== 0 && (
          <div className="fixed w-1/2 mx-auto bg-[rgba(255,255,255)] rounded-lg">
            <ul className="p-3">
              <button
                className="text-lg shadow-md px-5  py-2 m-1 cursor-pointer hover:bg-gray-300 rounded-xl bg-red-500 text-center"
                onClick={() => dispatch(setFocus(false))}
              >
                Close
              </button>
              {suggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  onClick={() => {
                    dispatch(setSearch(suggestion));
                  }}
                  className="text-lg shadow-md px-5  py-2 m-1 cursor-pointer hover:bg-gray-300 rounded-xl"
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2">
        <img src={User} alt="User" className="h-10 object-cover" />
      </div>
    </div>
  );
};

export default Header;
