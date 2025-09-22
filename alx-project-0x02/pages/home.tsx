import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "@/components/common/Card";

export default function Home() {
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

            {/* Grid of reusable Card components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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

            {/* Additional info card */}
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🏠 Project Features
              </h2>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Next.js Pages Router implementation</li>
                <li>✅ TypeScript integration with interfaces</li>
                <li>✅ Reusable Card component system</li>
                <li>✅ Tailwind CSS styling</li>
                <li>✅ Responsive grid layouts</li>
                <li>✅ Navigation between pages</li>
                <li>✅ SEO-optimized meta tags</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
