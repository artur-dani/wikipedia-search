import { SearchIcon } from "@heroicons/react/solid";

export default function SearchInput({ onChange }) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="email" className="sr-only">
        searc input
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          className="block w-full focus:ring-teal-600 focus:border-teal-600 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
