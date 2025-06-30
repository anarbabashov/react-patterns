import { useState, useEffect } from "react";

/**
 * @typedef {Object} DataFetcherProps
 * @property {string} url - The URL to fetch data from.
 * @property {Function} render - The function to render the data.
 */

export const DataFetcher = ({ url, render }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return render(data);
};

/**
 * Usage:
 * <DataFetcher
 *   url="https://api.example.com/data"
 *   render={(data) => <div>{data}</div>}
 * />
 */