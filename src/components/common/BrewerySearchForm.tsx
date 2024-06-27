import React, { useRef } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import useSearchStore from '../../stores/search/useSearchStore';
import { useLocation } from '@reach/router';

const SearchForm: React.FC = () => {
  const { searchQuery, error, handleSearchInputChange, handleSearch, setSearchQuery } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = () => {
    setSearchQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form className="w-full sm:w-fit relative flex flex-col gap-[0.5rem]" onSubmit={handleSearch}>
      <div className="relative w-full sm:w-fit flex items-center">
        <AiOutlineSearch className="absolute left-3 text-gray-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          ref={inputRef}
          aria-label="beer search"
          placeholder="City, State, or Zip Code"
          className="w-full sm:w-fit h-[50px] pl-10 pr-10 py-[5px] rounded-[25px] shadow-search focus:outline-none placeholder:font-sans font-medium"
        />
        {searchQuery && (
          <AiOutlineClose
            className="absolute right-3 text-gray-400 cursor-pointer"
            onClick={handleClearSearch}
          />
        )}
      </div>
      {/* <p className="text-[#FF0000] text-xs m-0 block w-[250px]">{error && error}</p> */}
    </form>
  );
};

export default SearchForm;