import { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import SearchResults from "./components/SearchResults";
import useSearchWikipedia from "./hooks/useSearchWikipedia";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { articles, loading, error } = useSearchWikipedia(searchTerm);

  useEffect(() => {
    console.log("articles", articles);
  }, [articles]);

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
          <SearchInput onChange={setSearchTerm} />
          <div className="mt-12">
            {loading && <div>Loading...</div>}
            {searchTerm && !loading && !error && (
              <SearchResults articles={articles} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
