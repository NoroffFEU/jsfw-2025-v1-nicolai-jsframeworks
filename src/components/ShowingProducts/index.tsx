import ProductItem from "../ProductItem";
import { useApi } from "../hook/useApiProducts";
import React, { useEffect, useRef, useState } from "react";
import { IProduct } from "../typescript";
import { useToast } from "../ToastContext";

function ShowingProducts({ search }: { search: string }) {
  const { showToast } = useToast();
  const { data, meta, loading, error, fetchData } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  const [filteredData, setFilteredData] = useState<IProduct[]>([]);
  const lastProductRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (!search) {
      setFilteredData(data);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = data.filter((product) =>
        product.title.toLowerCase().includes(lowerSearch)
      );
      setFilteredData(filtered);

      if (filtered.length === 0) {
        showToast("No results found for your search", "error");
      }
    }
  }, [search, data, showToast]);

  // Infinite scroll using IntersectionObserver
  useEffect(() => {
    if (!meta || meta.isLastPage) return;
    if (loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData(meta.nextPage, 10, true);
        }
      },
      { root: null, rootMargin: "50px", threshold: 0 }
    );

    if (lastProductRef.current) observer.observe(lastProductRef.current);

    return () => observer.disconnect();
  }, [meta, loading, fetchData, filteredData]);

  if (loading && data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-12 w-full md:w-[80%] xl:w-1/2 px-5 pb-5">
      {filteredData.map((product: any, index: number) => {
        if (index === data.length - 1) {
          return (
            <li ref={lastProductRef} key={product.id}>
              <ProductItem product={product} />
            </li>
          );
        }
        return (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        );
      })}
      {loading && (
        <p className="text-center w-full md:col-span-2">Loading more...</p>
      )}
    </ul>
  );
}

export default ShowingProducts;
