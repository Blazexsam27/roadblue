import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import groqServices from "../../services/groqServices";
import { useDispatch } from "react-redux";
import { setRoadMap } from "../../features/groqSlice";
import { PacmanLoader } from "react-spinners";

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const chatCompletion = await groqServices.main(searchQuery.trim());
      if (chatCompletion) {
        console.log("complete", chatCompletion);
        // set the roadmap in redux store
        dispatch(setRoadMap(chatCompletion));
      }
      console.log("incomplete", chatCompletion);
      setIsLoading(false);
    } catch (error: any) {
      console.error("Error occured while calling api", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={search}
        className={`
          flex items-center w-full overflow-hidden
          bg-white rounded-full shadow-lg
          ${isFocused ? "ring-2 ring-purple-400" : "hover:shadow-xl"}
          transition-all duration-300 ease-in-out
        `}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            flex-grow px-6 py-4 text-gray-700 focus:outline-none
            placeholder-gray-400 text-lg
          "
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          className="
          relative
          right-[2px]
            flex items-center justify-center
            h-full px-8 py-4
            bg-gradient-to-r from-purple-500 to-indigo-600
            text-white font-semibold
            rounded-full
            hover:from-purple-600 hover:to-indigo-700
            focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50
            transition-all duration-300 ease-in-out
          "
        >
          <IoSearchOutline size={24} />
          <span className="ml-2 hidden sm:inline">Search</span>
        </button>
      </form>

      <div className="my-8 flex justify-center">
        <PacmanLoader color="#8b5cf6" loading={isLoading} size={20} />
      </div>
    </div>
  );
};

export default SearchBar;
