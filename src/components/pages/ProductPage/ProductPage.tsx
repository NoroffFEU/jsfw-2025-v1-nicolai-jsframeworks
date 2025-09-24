import React from "react";
import { useParams } from "react-router-dom";
import ProductFocus from "../../ProductFocus";

const products = [
  {
    id: "159fdd2f-2b12-46de-9654-d9139525ba87",
    title: "Gold headphones",
    description: "Professional headphones with gold trim.",
    price: 449.99,
    discountedPrice: 20,
    image: {
      url: "https://sw6.elbenwald.de/media/67/ed/b3/1703288898/E1080370_3.jpg",
      alt: "Gold headphones laying on a white background",
    },
    rating: 4,
    tags: ["headphones"],
    reviews: [
      {
        id: "88e11191-d2e5-4bfb-9bcb-d7e158284657",
        username: "Michael J.",
        rating: 4,
        description: "Good sound quality.",
      },
    ],
  },
];

function ProductPage() {
  const { id } = useParams();

  // find the product by id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url("${products[0].image.url}")`,
      }}
      aria-label={`${product.title} item`}
    >
      <div className="absolute inset-0 bg-accent/80 dark:bg-secondary/60 backdrop-blur-md"></div>
      <div className="relative z-10 w-full h-screen overflow-y-auto flex items-center justify-center">
        <div className="mt-[40%] mb-10 sm:mt-0 sm:mb-0 p-3 w-fit md:w-[80%] xl:w-1/2">
          <ProductFocus {...product} />
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
