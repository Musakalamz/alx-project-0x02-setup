import { CardProps } from "../../interfaces";

export default function Card({ title, content, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  );
}
