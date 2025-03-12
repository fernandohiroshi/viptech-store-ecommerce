"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { Cart, CartItem } from "@/types";
import { toast } from "sonner";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();

  // Handle add to cart
  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error("There was an issue");
      return;
    }

    toast(res.message, {
      action: {
        label: "Go to cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    const res = await removeItemFromCart(item.productId);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast(res.message, {
      action: {
        label: "Go to cart",
        onClick: () => router.push("/cart"),
      },
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        <Minus className="h-4 w-4" />
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ) : (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add to cart
    </Button>
  );
};

export default AddToCart;
