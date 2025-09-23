import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type User } from "../interfaces";

interface UsersPageProps {
  users: User[];
  error?: string;
}

export default function Users({ users, error }: UsersPageProps) {
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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Users</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Manage and view user profiles fetched from JSONPlaceholder API.
              Explore user information including contact details and company
              data.
            </p>
          </div>

          {error && (
            <div className="text-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
                <p className="font-medium">Error loading users:</p>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!error && users.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {users.map((user) => (
                <UserCard
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  address={user.address}
                  phone={user.phone}
                  website={user.website}
                  company={user.company}
                />
              ))}
            </div>
          )}

          {!error && users.length === 0 && (
            <div className="text-center">
              <p className="text-gray-600">No users found.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

// Next.js getStaticProps function for server-side data fetching
export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    // Fetch users data from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();

    return {
      props: {
        users,
      },
      // Revalidate every hour (3600 seconds) for ISR
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching users:", error);

    return {
      props: {
        users: [],
        error: error instanceof Error ? error.message : "Failed to fetch users",
      },
      // Retry after 60 seconds if there's an error
      revalidate: 60,
    };
  }
};
