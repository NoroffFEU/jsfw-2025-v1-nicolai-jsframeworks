import { useState, useEffect, useCallback } from "react";

export function useApi(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [meta, setMeta] = useState<any | null>(null);

  const fetchData = useCallback(
    async (page = 1, limit = 10, append = true) => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const json = await response.json();

        setData((prev) => (append ? [...prev, ...json.data] : json.data));
        setMeta(json.meta);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    setData([]);
    setMeta(null);
    fetchData(1, 10, false);
  }, [url, fetchData]);

  return { data, meta, loading, error, fetchData };
}
