import { type UserProps } from "../../interfaces";

export default function UserCard({
  name,
  email,
  address,
  phone,
  website,
  company,
}: UserProps) {
  // Generate initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Generate a color based on name
  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-teal-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* User Avatar and Basic Info */}
      <div className="flex items-center mb-4">
        <div
          className={`w-12 h-12 ${getAvatarColor(
            name
          )} rounded-full flex items-center justify-center text-white font-bold text-lg`}
        >
          {getInitials(name)}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 text-sm">📧 {email}</p>
        </div>
      </div>

      {/* Address Information */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Address:</h4>
        <p className="text-gray-600 text-sm">
          {address.street}, {address.suite}
        </p>
        <p className="text-gray-600 text-sm">
          {address.city} {address.zipcode}
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-2 mb-4">
        {phone && <p className="text-gray-600 text-sm">📞 {phone}</p>}
        {website && (
          <p className="text-gray-600 text-sm">
            🌐{" "}
            <a
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              {website}
            </a>
          </p>
        )}
      </div>

      {/* Company Information */}
      {company && (
        <div className="mb-4 p-3 bg-gray-50 rounded-md">
          <h4 className="text-sm font-medium text-gray-700 mb-1">Company:</h4>
          <p className="text-gray-800 font-medium text-sm">{company.name}</p>
          {company.catchPhrase && (
            <p className="text-gray-600 text-xs italic">
              &ldquo;{company.catchPhrase}&rdquo;
            </p>
          )}
        </div>
      )}

      {/* Action Button */}
      <div className="flex justify-end pt-4 border-t border-gray-100">
        <button
          className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
          onClick={() => console.log(`Viewing profile for: ${name}`)}
        >
          View Profile →
        </button>
      </div>
    </div>
  );
}
