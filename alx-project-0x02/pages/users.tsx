import Head from "next/head";
import Header from "../components/layout/Header";

export default function Users() {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
        <meta name="description" content="Users page of ALX Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Users</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Manage and view user profiles. This page demonstrates user
              management and will integrate with external APIs for dynamic user
              data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Sample User Cards */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JD
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      John Doe
                    </h3>
                    <p className="text-gray-600 text-sm">@johndoe</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Full-stack developer passionate about React and Next.js.
                  Building modern web applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    📧 john@example.com
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Profile
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    JS
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Jane Smith
                    </h3>
                    <p className="text-gray-600 text-sm">@janesmith</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  UI/UX Designer with expertise in creating beautiful and
                  user-friendly interfaces.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    📧 jane@example.com
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Profile
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    MB
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Mike Brown
                    </h3>
                    <p className="text-gray-600 text-sm">@mikebrown</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  DevOps engineer focused on cloud infrastructure and automated
                  deployment pipelines.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    📧 mike@example.com
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                👥 API Integration Coming Soon
              </h2>
              <p className="text-gray-600">
                This page will be enhanced with JSONPlaceholder API integration
                to fetch and display real user data dynamically.
              </p>
              <div className="mt-4 flex justify-center space-x-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  User Management
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  API Integration
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  Dynamic Content
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
