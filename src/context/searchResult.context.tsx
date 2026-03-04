import { createContext, useState } from "react";

export const SearchResultContext = createContext({} as any);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchText, setsearchText] = useState("");
  const [searchData, setSearchData] = useState();

  const value = { searchText, searchData, setSearchData, setsearchText };

  return (
    <SearchResultContext.Provider value={value}>
      {children}
    </SearchResultContext.Provider>
  );
};