import Image from "next/image";
import { TProduct } from "../../../types/product";
import ProductStar from "./ProductStar";

export default function ProductCard({ product }: { product: TProduct }) {
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="">
        <Image
          src={product?.image?.src || "/images/placeholder.jpg"}
          className="rounded-lg"
          alt=""
          width={400}
          height={200}
        />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <ProductStar />
          <ProductStar />
          <ProductStar />
          <ProductStar />
          <ProductStar />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
