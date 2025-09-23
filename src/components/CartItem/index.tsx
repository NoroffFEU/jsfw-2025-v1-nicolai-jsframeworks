interface IProduct {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
}

function CartItem({ title, price, discountedPrice, id, image }: IProduct) {
  return <div>{title}</div>;
}

export default CartItem;
