import { getAllPosts } from "@/actions/post";
import PostEditor from "@/components/post-editor";
import Post from "@/components/posts/post";
import TrendsSidebar from "@/components/trends-sidebar";
import React from "react";

async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5 flex-1">
        <PostEditor />

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      <TrendsSidebar />
    </main>
  );
}

export default Home;
