import { ChevronRightIcon } from "@heroicons/react/solid";

export default function SearchResults({ articles }) {
  return (
    <>
      <h2 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
        Search results
      </h2>
      <ul className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {articles.map((article) => (
          <li
            key={article.id}
            className="relative py-2 flex items-start space-x-4"
          >
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-medium text-gray-900">
                <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <a href={article.url} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {article.title}
                  </a>
                </span>
              </h3>
              <p className="text-base text-gray-500">{article.description}</p>
            </div>
            <div className="flex-shrink-0 self-center">
              <ChevronRightIcon
                className="h-8 w-8 text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
