import React, { useEffect, useState } from "react";
import { fetchUserPosts, fetchPostComments } from "../api";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
      let allPosts = [];
      let commentCounts = {};

      for (let userId = 1; userId <= 20; userId++) {
        const posts = await fetchUserPosts(userId);
        allPosts.push(...posts);
      }

      await Promise.all(
        allPosts.map(async (post) => {
          const comments = await fetchPostComments(post.id);
          commentCounts[post.id] = comments.length;
        })
      );

      const maxComments = Math.max(...Object.values(commentCounts));

      const trending = allPosts.filter(
        (post) => commentCounts[post.id] === maxComments
      );

      setTrendingPosts(trending);
    };

    getTrendingPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <div key={post.id} className="border p-4 my-2">
          <p>{post.content}</p>
          <span>Comments: {post.commentCount}</span>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
