import React from "react";

const UserCard = ({ name, postCount }) => {
  return (
    <div className="border p-4 my-2 rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{postCount} Posts</p>
    </div>
  );
};

export default UserCard;
