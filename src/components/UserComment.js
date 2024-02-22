import React from "react";
import DOMPurify from "dompurify";

const UserComment = ({ comment }) => {
  const { snippet } = comment?.snippet?.topLevelComment;
  const { totalReplyCount } = comment?.snippet;
  if (!snippet.authorProfileImageUrl) return;

  return (
    <div className="comments flex flex-row my-4 px-3 py-1 gap-3  rounded-lg shadow-lg ">
      <img
        src={snippet?.authorProfileImageUrl}
        alt="comment image"
        className="rounded-full w-12 h-12 object-cover  "
      />
      <div className="">
        <p className="font-bold text-md">{snippet?.authorDisplayName}</p>
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(snippet?.textDisplay),
          }}
        ></div>
        <p>{totalReplyCount} Replies</p>
      </div>
    </div>
  );
};

export default UserComment;
