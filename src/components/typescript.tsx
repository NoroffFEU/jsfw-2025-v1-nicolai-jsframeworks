// Image for a product
export interface IImage {
  url: string;
  alt: string;
}

// Review for a product
export interface IReview {
  id: string;
  username: string;
  rating: number;
  description: string;
}

// Single product
export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  image: IImage;
  rating: number;
  tags: string[];
  reviews: IReview[];
}

// Metadata for pagination
export interface IMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}

// Full API response
export interface IProductsResponse {
  data: IProduct[];
  meta: IMeta;
}