import PostEditor from "@/components/post-editor";
import ForYouFeed from "@/components/posts/for-you-feed";
import TrendsSidebar from "@/components/trends-sidebar";

async function Home() {
  return (
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5 flex-1">
        <PostEditor />

        <ForYouFeed />
      </div>

      <TrendsSidebar />
    </main>
  );
}

export default Home;
