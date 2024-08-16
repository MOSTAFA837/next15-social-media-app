import PostEditor from "@/components/posts/editor/post-editor";
import FollowingFeed from "@/components/posts/following-feed";
import ForYouFeed from "@/components/posts/for-you-feed";
import TrendsSidebar from "@/components/trends-sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function Home() {
  return (
    <main className="w-full min-w-0 flex gap-5">
      <div className="w-full min-w-0 space-y-5 flex-1">
        <PostEditor />

        <Tabs defaultValue="for-you">
          <TabsList>
            <TabsTrigger value="for-you">For you</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
          </TabsList>
          <TabsContent value="for-you">
            <ForYouFeed />
          </TabsContent>
          <TabsContent value="following">
            <FollowingFeed />
          </TabsContent>
        </Tabs>
      </div>

      <TrendsSidebar />
    </main>
  );
}

export default Home;
