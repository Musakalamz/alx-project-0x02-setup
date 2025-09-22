import Head from "next/head";
import Header from "../components/layout/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
        <meta name="description" content="About page of ALX Next.js project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About This Project
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn more about this Next.js project and the technologies used to
              build it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  🚀 Technologies Used
                </h2>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>
                    <strong>Next.js 15:</strong> React framework for production
                  </li>
                  <li>
                    <strong>TypeScript:</strong> Type-safe JavaScript
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> Utility-first CSS framework
                  </li>
                  <li>
                    <strong>ESLint:</strong> Code linting and formatting
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  📋 Project Goals
                </h2>
                <ul className="text-left text-gray-600 space-y-2">
                  <li>✨ Learn Next.js fundamentals</li>
                  <li>🔧 Practice TypeScript development</li>
                  <li>🎨 Master Tailwind CSS</li>
                  <li>🌐 Implement routing and navigation</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                👨‍💻 About the Developer
              </h2>
              <p className="text-gray-600">
                This project is part of the ALX Software Engineering program,
                focusing on modern web development practices and technologies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
