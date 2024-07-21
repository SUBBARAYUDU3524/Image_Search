import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage, isLoading } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = () => {
    const searchUrl = `search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`;
    console.log('Fetching data with URL:', searchUrl);
    fetchData(searchUrl);
    setSearchValue("");
    setSearchImage(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === 'Enter') {
      const searchUrl = `search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_APP_ACCESS_KEY}`;
      console.log('Fetching data with URL:', searchUrl);
      fetchData(searchUrl);
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleButtonSearch}
        disabled={!searchValue || isLoading}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        {isLoading ? 'Loading...' : 'Search'}
      </button>
    </div>
  );
};

export default SearchField;
