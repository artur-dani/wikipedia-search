import { useState, useEffect } from "react";
import { API_URL } from "../constants";
import qs from "qs";
import useFetch from "./useFetch";
import { stripHtml } from "../utils";

const useSearchWikipedia = (searchPhrase = "test") => {
  const [articles, setArticles] = useState([]);
  const { data, loading, error } = useFetch(
    `${API_URL}search/page?${qs.stringify({ q: searchPhrase, limit: 5 })}`
  );

  useEffect(() => {
    if (data) {
      const articles = data.pages.map((page) => ({
        id: page.id,
        title: page.title,
        description: stripHtml(page.excerpt),
        url: `https://en.wikipedia.org/wiki/${page.key}`,
      }));

      setArticles(articles);
    }
  }, [data]);

  return { articles, loading, error };
};

export default useSearchWikipedia;
