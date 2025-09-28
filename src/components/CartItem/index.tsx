import { useCart } from "../CartContext";

interface IProduct {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  image: {
    url: string;
    alt: string;
  };
}

function CartItem({ title, price, discountedPrice, image, id }: IProduct) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const item = cart.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;

  return (
    <li
      className="relative"
      aria-label={`Cart item: ${title}, quantity ${quantity}, total ${
        (discountedPrice > 0 ? discountedPrice : price) * quantity
      }`}
    >
      <div className="grid sm:grid-cols-[1fr_7fr_1fr] md:grid-cols-[50%_1fr_1fr_1fr] gap-5">
        <div className="flex flex-row flex-wrap gap-2 xl:gap-5 sm:col-start-2 md:col-start-1">
          <img
            src={image.url}
            alt={image.alt}
            className="w-28 h-auto aspect-square object-cover rounded-lg"
          />
          <div className="flex flex-col justify-center gap-1 md:gap-2">
            <p className="font-bold uppercase font-inter tracking-widest text-secondary dark:text-accent text-wrap">
              {title}
            </p>
            {/* item + mobile item */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 relative group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27 27"
                  fill="none"
                  className="w-8 h-auto"
                >
                  <mask id="path-1-inside-1_18_1535" fill="white">
                    <path d="M0 16.6011C0 18.1924 0.632141 19.7186 1.75736 20.8438L6.0444 25.1308C7.16962 26.256 8.69574 26.8882 10.287 26.8882H20.6406C23.9543 26.8882 26.6406 24.2019 26.6406 20.8882V6.24854C26.6406 2.93483 23.9543 0.248535 20.6406 0.248535H6C2.68629 0.248535 0 2.93483 0 6.24854V16.6011Z" />
                  </mask>
                  <path
                    d="M1.75736 20.8438L3.17157 19.4296L7.45861 23.7166L6.0444 25.1308L4.63019 26.545L0.343145 22.258L1.75736 20.8438ZM10.287 26.8882V24.8882H20.6406V26.8882V28.8882H10.287V26.8882ZM26.6406 20.8882H24.6406V6.24854H26.6406H28.6406V20.8882H26.6406ZM20.6406 0.248535V2.24854H6V0.248535V-1.75146H20.6406V0.248535ZM0 6.24854H2V16.6011H0H-2V6.24854H0ZM6 0.248535V2.24854C3.79086 2.24854 2 4.0394 2 6.24854H0H-2C-2 1.83026 1.58172 -1.75146 6 -1.75146V0.248535ZM26.6406 6.24854H24.6406C24.6406 4.0394 22.8498 2.24854 20.6406 2.24854V0.248535V-1.75146C25.0589 -1.75146 28.6406 1.83026 28.6406 6.24854H26.6406ZM20.6406 26.8882V24.8882C22.8498 24.8882 24.6406 23.0973 24.6406 20.8882H26.6406H28.6406C28.6406 25.3065 25.0589 28.8882 20.6406 28.8882V26.8882ZM6.0444 25.1308L7.45861 23.7166C8.20876 24.4668 9.22617 24.8882 10.287 24.8882V26.8882V28.8882C8.16531 28.8882 6.13048 28.0453 4.63019 26.545L6.0444 25.1308ZM1.75736 20.8438L0.343145 22.258C-1.15714 20.7577 -2 18.7229 -2 16.6011H0H2C2 17.662 2.42143 18.6794 3.17157 19.4296L1.75736 20.8438Z"
                    className="fill-primary lg:dark:group-hover:fill-accent lg:group-hover:fill-secondary !duration-300"
                    mask="url(#path-1-inside-1_18_1535)"
                  />
                </svg>
                <button
                  className="px-2 font-semibold font-inter text-2xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:dark:group-hover:text-accent lg:group-hover:text-secondary !duration-300"
                  aria-label={`Decrease quantity of ${title}`}
                  onClick={() => updateQuantity(id, -1)}
                >
                  -
                </button>
              </div>
              <p className="font-micro text-3xl text-secondary dark:text-accent block md:hidden">
                {quantity}
              </p>
              <div className="w-8 h-8 relative group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 27 27"
                  className="w-8 h-auto"
                  fill="none"
                >
                  <mask id="path-1-inside-1_18_1532" fill="white">
                    <path d="M26.6533 16.6004C26.6533 18.1916 26.0213 19.7176 24.8962 20.8428L20.609 25.1306C19.4837 26.2559 17.9575 26.8882 16.3661 26.8882H6.0127C2.69899 26.8882 0.0126953 24.2019 0.0126953 20.8882V6.24854C0.0126953 2.93483 2.69899 0.248535 6.0127 0.248535H20.6533C23.967 0.248535 26.6533 2.93483 26.6533 6.24853V16.6004Z" />
                  </mask>
                  <path
                    d="M20.609 25.1306L19.1947 23.7164L20.609 25.1306ZM24.8962 20.8428L23.4819 19.4286L19.1947 23.7164L20.609 25.1306L22.0233 26.5447L26.3105 22.2569L24.8962 20.8428ZM16.3661 26.8882V24.8882H6.0127V26.8882V28.8882H16.3661V26.8882ZM0.0126953 20.8882H2.0127V6.24854H0.0126953H-1.9873V20.8882H0.0126953ZM6.0127 0.248535V2.24854H20.6533V0.248535V-1.75146H6.0127V0.248535ZM26.6533 6.24853H24.6533V16.6004H26.6533H28.6533V6.24853H26.6533ZM20.6533 0.248535V2.24854C22.8625 2.24854 24.6533 4.0394 24.6533 6.24853H26.6533H28.6533C28.6533 1.83026 25.0716 -1.75146 20.6533 -1.75146V0.248535ZM0.0126953 6.24854H2.0127C2.0127 4.0394 3.80356 2.24854 6.0127 2.24854V0.248535V-1.75146C1.59442 -1.75146 -1.9873 1.83026 -1.9873 6.24854H0.0126953ZM6.0127 26.8882V24.8882C3.80356 24.8882 2.0127 23.0973 2.0127 20.8882H0.0126953H-1.9873C-1.9873 25.3065 1.59442 28.8882 6.0127 28.8882V26.8882ZM20.609 25.1306L19.1947 23.7164C18.4445 24.4667 17.427 24.8882 16.3661 24.8882V26.8882V28.8882C18.488 28.8882 20.523 28.0452 22.0233 26.5447L20.609 25.1306ZM24.8962 20.8428L26.3105 22.2569C27.8106 20.7566 28.6533 18.7219 28.6533 16.6004H26.6533H24.6533C24.6533 17.6612 24.232 18.6785 23.4819 19.4286L24.8962 20.8428Z"
                    className="fill-primary lg:dark:group-hover:fill-accent lg:group-hover:fill-secondary !duration-300"
                    mask="url(#path-1-inside-1_18_1532)"
                  />
                </svg>
                <button
                  className="px-2 font-semibold font-inter text-2xl text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:dark:group-hover:text-accent lg:group-hover:text-secondary !duration-300"
                  aria-label={`Increase quantity of ${title}`}
                  onClick={() => updateQuantity(id, +1)}
                >
                  +
                </button>
              </div>
              <div className="w-7 h-7 relative bg-primary lg:hover:bg-secondary lg:dark:hover:bg-accent rounded-md rotate-45 ml-1 !duration-300">
                <button
                  className="px-2 font-semibold font-inter text-2xl dark:text-secondary text-accent absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !duration-300"
                  aria-label={`Remove ${title} from cart`}
                  onClick={() => removeFromCart(id)}
                >
                  <span aria-hidden="true">+</span>
                </button>
              </div>
            </div>
            {discountedPrice > 0 ? (
              <div className="flex md:hidden flex-row items-center leading-7 font-micro text-3xl text-secondary dark:text-accent gap-3">
                <p
                  className="line-through decoration-primary"
                  aria-hidden="true"
                >
                  {(price * quantity).toFixed(0)}
                </p>
                <span className="sr-only">
                  Total discounted item price {discountedPrice.toFixed(0)}
                </span>
                <p>{(discountedPrice * quantity).toFixed(0)}</p>
              </div>
            ) : (
              <div>
                <span className="sr-only">
                  Total item price {price.toFixed(0)}
                </span>
                <p className="block md:hidden font-micro leading-7 text-3xl text-secondary dark:text-accent">
                  {(price * quantity).toFixed(0)}
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="m-auto font-micro text-3xl text-secondary dark:text-accent hidden md:block">
          {quantity}
        </p>
        {discountedPrice > 0 ? (
          <div className="hidden md:flex flex-col leading-5 m-auto font-micro text-3xl text-secondary dark:text-accent">
            <p className="line-through decoration-primary" aria-hidden="true">
              {price.toFixed(0)}
            </p>
            <span className="sr-only">
              Discounted item price {discountedPrice.toFixed(0)}
            </span>
            <p>{discountedPrice.toFixed(0)}</p>
          </div>
        ) : (
          <div className="hidden md:block m-auto">
            <span className="sr-only">
              Item price {discountedPrice.toFixed(0)}
            </span>
            <p className="font-micro text-3xl text-secondary dark:text-accent">
              {price.toFixed(0)}
            </p>
          </div>
        )}
        {discountedPrice > 0 ? (
          <div className="hidden md:flex flex-col items-center leading-5 m-auto font-micro text-3xl text-secondary dark:text-accent">
            <p className="line-through decoration-primary">
              {(price * quantity).toFixed(0)}
            </p>
            <span className="sr-only">
              Total discounted item price {discountedPrice.toFixed(0)}
            </span>
            <p>{(discountedPrice * quantity).toFixed(0)}</p>
          </div>
        ) : (
          <div className="hidden md:block m-auto">
            <span className="sr-only">Total item price {price.toFixed(0)}</span>
            <p className="font-micro text-3xl text-secondary dark:text-accent">
              {(price * quantity).toFixed(0)}
            </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default CartItem;
