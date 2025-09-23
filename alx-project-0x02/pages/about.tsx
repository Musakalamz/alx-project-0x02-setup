import Head from "next/head";
import Header from "../components/layout/Header";
import Button from "@/components/common/Button";

export default function About() {
  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

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

            {/* Button Component Showcase */}
            <div className="mb-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                🎯 Button Component Showcase
              </h2>
              <p className="text-gray-600 mb-6">
                Demonstrating our reusable Button component with different sizes
                and shapes:
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button
                  size="small"
                  shape="rounded-sm"
                  variant="primary"
                  onClick={() => handleButtonClick("Small Primary")}
                >
                  Small Button
                </Button>

                <Button
                  size="medium"
                  shape="rounded-md"
                  variant="secondary"
                  onClick={() => handleButtonClick("Medium Secondary")}
                >
                  Medium Button
                </Button>

                <Button
                  size="large"
                  shape="rounded-full"
                  variant="danger"
                  onClick={() => handleButtonClick("Large Danger")}
                >
                  Large Button
                </Button>
              </div>

              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  <strong>Small:</strong> rounded-sm, primary variant
                </p>
                <p>
                  <strong>Medium:</strong> rounded-md, secondary variant
                </p>
                <p>
                  <strong>Large:</strong> rounded-full, danger variant
                </p>
              </div>
            </div>

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
                  <li>✅ Learn Next.js fundamentals</li>
                  <li>✅ Practice TypeScript integration</li>
                  <li>✅ Implement responsive design</li>
                  <li>✅ Create reusable components</li>
                  <li>✅ Build interactive features</li>
                </ul>
              </div>
            </div>

            {/* Additional Button Examples */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                🎨 More Button Variations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Size Variations
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <Button size="small" variant="primary">
                        Small
                      </Button>
                    </div>
                    <div>
                      <Button size="medium" variant="primary">
                        Medium
                      </Button>
                    </div>
                    <div>
                      <Button size="large" variant="primary">
                        Large
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Shape Variations
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <Button shape="rounded-sm" variant="secondary">
                        Sharp
                      </Button>
                    </div>
                    <div>
                      <Button shape="rounded-md" variant="secondary">
                        Rounded
                      </Button>
                    </div>
                    <div>
                      <Button shape="rounded-full" variant="secondary">
                        Pill
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Variant Types
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <Button variant="primary">Primary</Button>
                    </div>
                    <div>
                      <Button variant="secondary">Secondary</Button>
                    </div>
                    <div>
                      <Button variant="danger">Danger</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Info */}
            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                👨‍💻 Developer Information
              </h2>
              <p className="text-gray-600 mb-4">
                This project was built as part of the ALX Software Engineering
                program, focusing on modern web development practices and
                component-based architecture.
              </p>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="medium"
                  shape="rounded-md"
                  onClick={() =>
                    window.open(
                      "https://github.com/alx-project-0x02-setup",
                      "_blank"
                    )
                  }
                >
                  🔗 View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
