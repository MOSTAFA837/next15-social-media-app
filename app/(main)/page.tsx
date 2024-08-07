import { getAllPosts } from "@/actions/post";
import PostEditor from "@/components/post-editor";
import Post from "@/components/posts/post";
import React from "react";

async function Home() {
  const posts = await getAllPosts();

  return (
    <main className="w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
        <PostEditor />

        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Home;
