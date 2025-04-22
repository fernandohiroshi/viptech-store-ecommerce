import { notFound } from "next/navigation"

import { auth } from "@/auth"

import AddToCart from "@/components/shared/product/add-to-cart"
import ProductImages from "@/components/shared/product/product-images"
import ProductPrice from "@/components/shared/product/product-price"
import Rating from "@/components/shared/product/rating"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

import { getMyCart } from "@/lib/actions/cart.actions"
import { getProductBySlug } from "@/lib/actions/product.actions"

import ReviewList from "./review-list"

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await props.params

  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const session = await auth()
  const userId = session?.user?.id

  const cart = await getMyCart()

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* IMAGE COLUMN */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* DETAILS COLUMN */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              {/* RATING */}
              <Rating value={Number(product.rating)} />
              <p>{product.numReviews} reviews</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <ProductPrice
                  value={Number(product.price)}
                  className="w-28 rounded-full bg-emerald-100 p-2 text-center text-emerald-800"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* ACTION COLUMN */}
          <div>
            <Card>
              <CardContent className="p-2 lg:px-4">
                <div className="mb-2 flex flex-col justify-between lg:flex-row">
                  <div>Price</div>
                  <div>
                    <ProductPrice value={Number(product.price)} />
                  </div>
                </div>
                <div className="mb-2 flex flex-col justify-between lg:flex-row">
                  <div className="mr-2">Status</div>
                  {product.stock > 0 ? (
                    <Badge variant="outline">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>
                {product.stock > 0 && (
                  <div className="flex-center">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="mt-10">
        <h2 className="h2-bold mb-5">Customer Reviews</h2>
        <ReviewList
          userId={userId || ""}
          productId={product.id}
          productSlug={product.slug}
        />
      </section>
    </>
  )
}

export default ProductDetailsPage
