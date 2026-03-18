import { Input } from "postcss";
import apiClient from "../services/api-client"
import { SearchResultContext } from "../context/searchResult.context";
import { useContext, useEffect } from "react";


const useMultiSearch = (Input: String) => {
   const { setSearchData } = useContext(SearchResultContext);
    const fetchSearch = async () => {
        const res = await apiClient.get("/search/multi", {
           params : {
            query : Input,
           }
        });
        setSearchData(res.data.results);
     };

     useEffect(() => {
      fetchSearch();
     }, [Input]);
};

export default useMultiSearch;