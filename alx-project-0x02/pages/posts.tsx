import Head from "next/head";
import Header from "../components/layout/Header";

export default function Posts() {
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
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Posts</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore blog posts and articles. This page will showcase content
              management and API integration with external data sources.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Sample Post Cards */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Getting Started with Next.js
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the fundamentals of Next.js and how to build modern web
                  applications with React and TypeScript.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Jan 15, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  TypeScript Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover essential TypeScript patterns and practices for
                  building robust and maintainable applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Jan 12, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Tailwind CSS Tips
                </h3>
                <p className="text-gray-600 mb-4">
                  Master utility-first CSS with Tailwind and create beautiful,
                  responsive designs efficiently.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Jan 10, 2024</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                📝 Coming Soon
              </h2>
              <p className="text-gray-600">
                This page will be enhanced with API integration to fetch real
                posts from JSONPlaceholder API, allowing dynamic content
                management.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
