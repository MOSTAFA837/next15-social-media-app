"use client";

import { PostData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import Post from "./post";
import kyInstance from "@/lib/ky";

export default function ForYouFeed() {
  const query = useQuery<PostData[]>({
    queryKey: ["post-feed", "for-you"],
    queryFn: kyInstance.get("/api/posts/for-you").json<PostData[]>,
  });

  if (query.status === "pending") {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (query.status === "error") {
    return (
      <p className="text-center text-destructive">
        An error occurred while loading posts.
      </p>
    );
  }

  return (
    <div className="space-y-5">
      {query.data.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
