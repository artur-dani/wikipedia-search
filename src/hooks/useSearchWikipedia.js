import { useState, useEffect } from "react";
import { API_URL } from "../constants";
import qs from "qs";
import axios from "axios";
import { stripHtml } from "../utils";

const useSearchWikipedia = (searchPhrase) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchPhrase) {
      return;
    }
    axios
      .get(
        `${API_URL}search/page?${qs.stringify({ q: searchPhrase, limit: 5 })}`
      )
      .then((res) => {
        if (res.data) {
          const articles = res.data.pages.map((page) => ({
            id: page.id,
            title: page.title,
            description: stripHtml(page.excerpt),
            url: `https://en.wikipedia.org/wiki/${page.key}`,
          }));

          setArticles(articles);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [searchPhrase]);

  return { articles, loading, error };
};

export default useSearchWikipedia;
