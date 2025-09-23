import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type Post } from "../interfaces";

interface PostsPageProps {
  posts: Post[];
  error?: string;
}

export default function Posts({ posts, error }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
        <meta name="description" content="Posts page of ALX Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Posts</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore blog posts and articles fetched from JSONPlaceholder API.
              Discover content from various users and topics.
            </p>
          </div>

          {error && (
            <div className="text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
                <p className="font-medium">Error loading posts:</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!error && posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  content={post.body}
                  userId={post.userId}
                />
              ))}
            </div>
          )}

          {!error && posts.length === 0 && (
            <div className="text-center">
              <p className="text-gray-600">No posts found.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: Post[] = await response.json();
    // Limit to first 12 posts for better display
    const posts = data.slice(0, 12);

    return {
      props: {
        posts,
      },
      // Revalidate every hour (3600 seconds)
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);

    return {
      props: {
        posts: [],
        error: error instanceof Error ? error.message : "Failed to fetch posts",
      },
      // Retry after 60 seconds if there's an error
      revalidate: 60,
    };
  }
};
