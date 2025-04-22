"use client"

import { Plus, Minus, Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { toast } from "sonner"

import { Cart, CartItem } from "@/types"

import { Button } from "@/components/ui/button"

import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions"

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  // Handle add to cart
  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item)

      if (!res.success) {
        toast.error("There was an issue")
        return
      }

      toast(res.message, {
        action: {
          label: "Go to cart",
          onClick: () => router.push("/cart"),
        },
      })
    })
  }

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId)

      if (!res.success) {
        toast.error(res.message)
        return
      }

      toast(res.message, {
        action: {
          label: "Go to cart",
          onClick: () => router.push("/cart"),
        },
      })
    })
  }

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId)

  return existItem ? (
    <div>
      <Button type="button" variant="outline" onClick={handleRemoveFromCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>
      <span className="px-2">{existItem.qty}</span>
      <Button type="button" variant="outline" onClick={handleAddToCart}>
        {isPending ? (
          <Loader className="h-4 w-4 animate-spin" />
        ) : (
          <Plus className="h-4 w-4" />
        )}
      </Button>
    </div>
  ) : (
    <Button className="w-full text-xs" type="button" onClick={handleAddToCart}>
      {isPending ? (
        <Loader className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
      Add to cart
    </Button>
  )
}

export default AddToCart
