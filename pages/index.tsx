import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project - Next.js Setup</title>
        <meta
          name="description"
          content="Next.js project with TypeScript and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to ALX Project
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              This is a Next.js application built with TypeScript and Tailwind
              CSS. Explore modern web development with reusable components,
              routing, and API integration.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
                <p className="text-gray-600">
                  Built with Next.js for optimal performance and developer
                  experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold mb-2">TypeScript Ready</h3>
                <p className="text-gray-600">
                  Type-safe development with TypeScript for better code quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-gray-600">
                  Beautiful, responsive designs with utility-first CSS
                  framework.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
