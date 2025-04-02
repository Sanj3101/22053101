import React, { useEffect, useState } from "react";
import { fetchUserPosts } from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      let allPosts = [];

      for (let userId = 1; userId <= 20; userId++) {
        const userPosts = await fetchUserPosts(userId);
        allPosts.push(...userPosts);
      }

      setPosts(allPosts.sort((a, b) => b.id - a.id));
    };

    fetchFeed();

    const interval = setInterval(() => {
      fetchFeed();
    }, 10000); // Polling every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Live Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 my-2">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
