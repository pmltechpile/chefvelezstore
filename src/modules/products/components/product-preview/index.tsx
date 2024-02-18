import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "types/global"
import Thumbnail from "../thumbnail"

const ProductPreview = ({
  title,
  handle,
  thumbnail,
  price,
}: ProductPreviewType) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Link href={`/products/${handle}`}>
        <div>
          <Thumbnail thumbnail={thumbnail} size="full" />
          <div className="p-4 bg-orange-500 text-center"> 
              <p className="text-lg text-sm font-medium text-white font-bold">Will travel to location</p>
            </div>
          <div className="p-4 bg-white">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="flex items-center gap-x-2 mt-1">
              {price ? (
               <div className="flex items-center gap-x-2 mt-1">
                  {price.price_type === "sale" && (
                    <span className="line-through text-gray-500">
                      {price.original_price}
                    </span>
                  )}
                  <span
                    className={clsx("font-semibold", {
                      "text-rose-500": price.price_type === "sale",
                    })}
                  >
                    {price.calculated_price}
                  </span>
		            </div>
              ) : (
                <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductPreview
