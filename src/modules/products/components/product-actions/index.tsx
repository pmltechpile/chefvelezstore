import { useProductActions } from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Button from "@modules/common/components/button"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import Link from "next/link"
import React, { useMemo } from "react"
import { Product } from "types/medusa"

type ProductActionsProps = {
  product: PricedProduct
}

// const hasMenuData = ({ product }:{product:ProductActionsProps}) => {
//   return !!(
//     product.metadata?.first ||
//     product.metadata?.second ||
//     product.metadata?.third ||
//     product.metadata?.last
//   );
// };

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])

  return (
    <div className="flex flex-col gap-y-2">
      {product.collection && (
        <Link
          href={`/collections/${product.collection.handle}`}
          className="text-small-regular text-gray-700"
        >
          {product.collection.title}
        </Link>
      )}
      <h3 className="text-xl-regular">{product.title}</h3>

      {/* <p className="text-base-regular">{product.description}</p> */}
      {product.metadata?.first ? (<>
        <h1 className="text-base-bold font-serif italic flex items-center justify-center py-2">First Bite</h1>
        <p className="text-base-regular flex items-center justify-center">{product.metadata?.first}</p>
        <h1 className="text-base-bold font-serif italic flex items-center justify-center py-2">Second Bite</h1>
        <p className="text-base-regular flex items-center justify-center">{product.metadata?.second}</p>
        <h1 className="text-base-bold font-serif italic flex items-center justify-center py-2">Third Bite</h1>
        <p className="text-base-regular flex items-center justify-center">{product.metadata?.third}</p>
        <h1 className="text-base-bold font-serif italic flex items-center justify-center py-2">Dessert</h1>
        <p className="text-base-regular flex items-center justify-center">{product.metadata?.last}</p>
        
      </>) : 
      (<p className="text-base-regular">{product.description}</p>)}
      

      {/* style the menu here. using metadata? */}

      {product.variants.length > 1 && (
        <div className="my-8 flex flex-col gap-y-6">
          {(product.options || []).map((option) => {
            return (
              <div key={option.id}>
                <OptionSelect
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              </div>
            )
          })}
        </div>
      )}

      <div className="mb-4">
        {selectedPrice ? (
          <div className="flex flex-col text-gray-700">
            <span
              className={clsx("text-xl-semi", {
                "text-rose-600": selectedPrice.price_type === "sale",
              })}
            >
              {selectedPrice.calculated_price}
            </span>
            {selectedPrice.price_type === "sale" && (
              <>
                <p>
                  <span className="text-gray-500">Original: </span>
                  <span className="line-through">
                    {selectedPrice.original_price}
                  </span>
                </p>
                <span className="text-rose-600">
                  -{selectedPrice.percentage_diff}%
                </span>
              </>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Button onClick={addToCart}>
        {!inStock ? "No Availability" : "Add to cart"}
      </Button>
    </div>
  )
}

export default ProductActions
