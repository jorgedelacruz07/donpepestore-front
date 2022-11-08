import Link from "next/link";
import { TStore } from "../../../types/store";

export default function StoreCard({ store }: { store: TStore }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {store.name}
          </h5>
        </a>
        {store.description && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {store.description}
          </p>
        )}
        <Link
          href={`/stores/${store.slug}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See store
        </Link>
      </div>
    </div>
  );
}
