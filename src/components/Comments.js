import React from "react";
import { useSelector } from "react-redux";
import UserComment from "./UserComment";

const Comments = () => {
  const comments = useSelector((state) => state.watch?.comments);
  if (comments === null) return;

  return (
    <div className=" w-full m-3 rounded-lg shadow-xl p-3">
      <h1 className="text-2xl font-bold my-3 border-b-2 border-black">
        Comments
      </h1>
      <div className="flex  flex-col ">
        {comments.map((comment) => {
          return <UserComment key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
