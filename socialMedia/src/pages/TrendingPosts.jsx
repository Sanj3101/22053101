import React, { useEffect, useState } from "react";
import { fetchUserPosts, fetchPostComments } from "../api";

const PostCard = ({ post, commentCount }) => {
  return (
    <div className="border p-4 my-2 rounded shadow-md bg-white">
      <p>{post.content}</p>
      <span className="text-sm text-gray-600">Comments: {commentCount}</span>
    </div>
  );
};

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
      const trending = allPosts
        .filter((post) => commentCounts[post.id] === maxComments)
        .map((post) => ({ ...post, commentCount: commentCounts[post.id] }));

      setTrendingPosts(trending);
    };

    getTrendingPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {trendingPosts.map((post) => (
        <PostCard key={post.id} post={post} commentCount={post.commentCount} />
      ))}
    </div>
  );
};

export default TrendingPosts;
