import { useCart } from "./CartContext";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded shadow text-center">
        <h2 className="text-xl font-bold mb-2">Your Cart</h2>
        <p className="text-muted-foreground">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="flex items-center py-4 gap-4">
            <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-muted-foreground">₹{item.price} x {item.quantity}</div>
            </div>
            <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <span className="font-bold">Total:</span>
        <span className="text-lg font-bold">
          ₹{items.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        </span>
      </div>
      <Button variant="secondary" className="mt-4 w-full" onClick={clearCart}>
        Clear Cart
      </Button>
    </div>
  );
};

export default CartPage; 