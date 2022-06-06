import { ChevronRightIcon } from "@heroicons/react/solid";

const articles = [
  {
    id: "1",
    title: "Article 1",
    description: "lorem ipsum dolor sit amet",
    url: "https://www.google.com",
  },
  {
    id: "2",
    title: "Article 2",
    description: "lorem ipsum dolor sit amet",
    url: "https://www.google.com",
  },
  {
    id: "3",
    title: "Article 3",
    description: "lorem ipsum dolor sit amet unum quidem quisquam",
    url: "https://www.google.com",
  },
  {
    id: "4",
    title: "Title Article 4",
    description: "lorem ipsum dolor sit amet unum quidem quisquam adipisci",
    url: "https://www.google.com",
  },
];

export default function App() {
  return (
    <div className="bg-white">
      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto py-16 sm:py-24">
          <div className="text-center">
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Wikipedia Search
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Search wikipedia articles.
            </p>
          </div>
          <div className="mt-12">
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
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {article.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {article.description}
                    </p>
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
          </div>
        </div>
      </main>
    </div>
  );
}
