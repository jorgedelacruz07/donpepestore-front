import { TStore } from "../../../types/store";
import CategoryCard from "../../components/categories/CategoryCard";

// async function getStores() {
//   const url = process.env.NEXT_PUBLIC_API_URL;

//   const res = await fetch(`${url}/client/stores`, { next: { revalidate: 60 } });

//   const data = await res.json();

//   return data;
// }

// export async function generateStaticParams() {
//   const stores = await getStores();

//   return stores.map((store: TStore) => ({
//     slug: store.slug,
//   }));
// }

async function getStore(slug: string) {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${url}/client/stores/${slug}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return data;
}

export default async function StorePage({ params }: { params: any }) {
  const { storeSlug } = params;

  const store: TStore = await getStore(storeSlug);

  return (
    <div>
      <div>{store.name}</div>
      <div className="grid grid-cols-3 gap-10">
        {store?.categories.map((category) => (
          <div key={category.slug} className="">
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
