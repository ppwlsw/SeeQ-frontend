import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex items-center border-[1px] rounded-full px-5 py-3 gap-3 border-[#242F40] bg-white shadow-md transition-all focus-within:ring-2 focus-within:ring-[#242F40] mx-3">
      <Search className="text-gray-400" />
      <input
        type="text"
        list="search-options"
        placeholder="Search for a cafe, university, or etc."
        className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
        aria-label="Search input"
      />
      <datalist id="search-options">
        <option value="Kasetsart University" />
        <option value="Chulalongkorn University" />
        <option value="King Mongkut's Institute of Technology Ladkrabang" />
        <option value="Thammasat University" />
        <option value="Mahidol University" />
      </datalist>
    </div>
  );
}

export default SearchBar;
