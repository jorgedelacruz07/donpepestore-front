import { TStore } from "../../types/store";
import StoreCard from "../components/stores/StoreCard";

async function getStores() {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${url}/client/stores`, { next: { revalidate: 60 } });

  const data = await res.json();

  return data;
}

export default async function StoresPage() {
  const stores = await getStores();

  return (
    <div className="grid grid-cols-3 gap-10">
      {stores.map((store: TStore) => (
        <div key={store.slug}>
          <StoreCard store={store} />
        </div>
      ))}
    </div>
  );
}
