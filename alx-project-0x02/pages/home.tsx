import { useState } from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type NewPost } from "../interfaces";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<NewPost[]>([]);

  const handleCreatePost = (postData: { title: string; content: string }) => {
    const newPost: NewPost = {
      id: Date.now(), // Simple ID generation
      title: postData.title,
      content: postData.content,
      createdAt: new Date().toLocaleDateString(),
    };

    setUserPosts((prev) => [newPost, ...prev]); // Add new post to the beginning
  };

  const handleDeletePost = (postId: number) => {
    setUserPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
        <meta name="description" content="Home page of ALX Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Home Page</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Welcome to the home page of our Next.js application. This page
              demonstrates basic routing functionality and reusable components.
            </p>

            {/* Create Post Button */}
            <div className="mb-12">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                ✏️ Create New Post
              </button>
            </div>

            {/* User Created Posts Section */}
            {userPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Your Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {userPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                    >
                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-lg"
                        aria-label="Delete post"
                      >
                        ×
                      </button>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3 pr-6">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {post.content}
                      </p>
                      <div className="text-sm text-gray-500">
                        Created: {post.createdAt}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grid of reusable Card components */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Project Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <Card
                  title="🚀 Next.js Framework"
                  content="Built with Next.js for server-side rendering, static site generation, and optimal performance. Includes automatic code splitting and hot reloading for the best developer experience."
                />

                <Card
                  title="⚡ TypeScript Integration"
                  content="Fully typed with TypeScript for better code quality, IntelliSense support, and catching errors at compile time. Ensures robust and maintainable code architecture."
                />

                <Card
                  title="🎨 Tailwind CSS Styling"
                  content="Styled with Tailwind CSS utility classes for rapid UI development. Responsive design patterns and consistent spacing throughout the application."
                />

                <Card
                  title="🧩 Reusable Components"
                  content="Modular component architecture with reusable Card components. Clean separation of concerns and props-based customization for maximum flexibility."
                />

                <Card
                  title="🔗 Pages Router"
                  content="Implements Next.js Pages Router for seamless navigation between different sections. File-based routing system for intuitive project structure."
                />

                <Card
                  title="📱 Responsive Design"
                  content="Mobile-first responsive design that works perfectly on all devices. Optimized layouts for desktop, tablet, and mobile viewing experiences."
                />
              </div>
            </div>

            {/* Additional info card */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🏠 Project Features
              </h2>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Next.js Pages Router implementation</li>
                <li>✅ TypeScript integration with interfaces</li>
                <li>✅ Reusable Card component system</li>
                <li>✅ Interactive Modal component</li>
                <li>✅ Dynamic content creation</li>
                <li>✅ Tailwind CSS styling</li>
                <li>✅ Responsive grid layouts</li>
                <li>✅ Navigation between pages</li>
                <li>✅ SEO-optimized meta tags</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* PostModal Component */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </>
  );
}
