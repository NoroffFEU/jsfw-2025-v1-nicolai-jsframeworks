import ProductItem from "../ProductItem";
import { useApi } from "../hook/useApiProducts";
import React from "react";

function ShowingProducts() {
  const { data, meta, loading, error, fetchData } = useApi(
    "https://v2.api.noroff.dev/online-shop"
  );

  //   Come back to fixing scroll
  //   useEffect(() => {
  //     if (!meta || meta.isLastPage) return;

  //     const handleScroll = () => {
  //       if (
  //         window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 200
  //       ) {
  //         fetchData(meta.currentPage + 1, 10, true);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);d
  //   }, [meta, fetchData]);

  if (loading && data.length === 0) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-12 w-full md:w-[80%] xl:w-1/2 px-5 pb-5">
      {data.map((product: any) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {loading && <p>Loading more...</p>}
      {meta?.isLastPage && <p>No more products.</p>}
    </ul>
  );
}

export default ShowingProducts;
