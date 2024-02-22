import React from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import app from "./store/appStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchComponent from "./components/WatchComponent";
import SearchComponent from "./components/SearchComponent";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/watch/:id",
        element: <WatchComponent />,
      },
      {
        path: "/search/:query",
        element: <SearchComponent />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={app}>
      <RouterProvider router={Router} />
    </Provider>
  );
};

export default App;
