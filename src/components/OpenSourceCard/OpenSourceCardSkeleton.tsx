export default function OpenSourceCardSkeleton() {
  return (
    <li className="space-y-4 animate-pulse">
      <div className="h-7 bg-gray-700 rounded w-1/3"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="h-5 bg-gray-700 rounded w-20"></div>
        <div className="h-5 bg-gray-700 rounded w-16"></div>
      </div>
      <div className="flex items-center gap-6 flex-wrap">
        <div className="h-4 bg-gray-700 rounded w-16"></div>
        <div className="h-4 bg-gray-700 rounded w-16"></div>
        <div className="h-4 bg-gray-700 rounded w-20"></div>
        <div className="h-4 bg-gray-700 rounded w-32"></div>
        <div className="h-4 bg-gray-700 rounded w-12"></div>
      </div>
    </li>
  );
}

