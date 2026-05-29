import { useCartContext } from "../contexts/CartContext";

export default function Cart() {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc: number, p: any) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <section class="bg-gray-100 text-gray-700 p-8">
      <h1>Cart</h1>
    </section>
  );
}