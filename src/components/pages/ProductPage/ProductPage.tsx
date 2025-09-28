import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductFocus from "../../ProductFocus";
import { IProduct } from "../../typescript.tsx";

function ProductPage() {
  const [data, setData] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url: string) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setData(json.data as IProduct);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <p className="text-center">Product not found</p>;
  }

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("${data.image.url}")`,
      }}
      aria-label={`${data.title} item`}
    >
      <div className="absolute inset-0 bg-accent/80 dark:bg-secondary/60 backdrop-blur-md"></div>
      <div className="relative z-10 w-full h-screen overflow-y-auto flex items-center justify-center">
        <div className="mt-[40%] mb-10 sm:mt-0 sm:mb-0 p-3 w-fit md:w-[80%] xl:w-1/2">
          <ProductFocus product={data} />
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
