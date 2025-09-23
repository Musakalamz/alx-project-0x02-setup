import { type PostProps } from "../../interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-2">
          <span className="font-medium">User ID:</span> {userId}
        </p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed line-clamp-3">{content}</p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <span className="text-sm text-gray-500">Post by User {userId}</span>
        <button
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          onClick={() => console.log(`Reading post: ${title}`)}
        >
          Read More →
        </button>
      </div>
    </div>
  );
}
