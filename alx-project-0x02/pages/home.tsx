import Head from "next/head";
import Header from "../components/layout/Header";

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
              demonstrates basic routing functionality using the Pages Router.
            </p>

            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                🏠 Home Features
              </h2>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Next.js Pages Router implementation</li>
                <li>✅ TypeScript integration</li>
                <li>✅ Tailwind CSS styling</li>
                <li>✅ Responsive design</li>
                <li>✅ Navigation between pages</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
