import React from "react";

const PostCard = ({ content }) => {
  return (
    <div className="border p-4 my-2 rounded-lg shadow-md bg-white">
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default PostCard;