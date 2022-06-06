import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";

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
            <div className="flex justify-center">
              <img
                className="h-20 w-auto"
                src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2@2x.png"
                alt="Wikipedia"
              />
            </div>
            <h1 className="mt-2 text-2xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Wikipedia Search
            </h1>
            <p className="mt-2 text-lg text-gray-500">The Free Encyclopedia</p>
          </div>
          <SearchInput />
          <div className="mt-12">
            <SearchResults articles={articles} />
          </div>
        </div>
      </main>
    </div>
  );
}
