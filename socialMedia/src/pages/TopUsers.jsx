import React, { useEffect, useState } from "react";
import { fetchUsers, fetchUserPosts } from "../api";
import UserCard from "../components/UserCard"; // Import the UserCard component

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const users = await fetchUsers();
      let postCounts = {};

      await Promise.all(
        Object.keys(users).map(async (userId) => {
          const posts = await fetchUserPosts(userId);
          postCounts[userId] = posts.length;
        })
      );

      const sortedUsers = Object.entries(postCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([id]) => ({ id, name: users[id], postCount: postCounts[id] }));

      setTopUsers(sortedUsers);
    };

    getTopUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Top 5 Users</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {topUsers.map((user) => (
          <UserCard key={user.id} name={user.name} postCount={user.postCount} />
        ))}
      </div>
    </div>
  );
};

export default TopUsers;
