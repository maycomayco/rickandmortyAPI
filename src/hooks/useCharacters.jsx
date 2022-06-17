/* eslint-disable no-useless-return */
import { useEffect, useState } from "react";
import getCharacters from "../services/getCharacters";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [currentPageUrl, setCurrentPageUrl] = useState();
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    setLoading(true);
    getCharacters(currentPageUrl).then((resp) => {
      const { next, prev, pages, cleanResults: results } = resp;
      setCharacters(results);
      setNextPageUrl(next);
      setPrevPageUrl(prev);
      setTotalPages(pages);
      setLoading(false);
    });
  }, [currentPageUrl]);

  return {
    loading,
    characters,
    setCurrentPageUrl,
    nextPageUrl,
    prevPageUrl,
    totalPages,
  };
};

export default useCharacters;
