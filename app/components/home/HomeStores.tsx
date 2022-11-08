import { TStore } from "../../../types/store";
import StoreCard from "../stores/StoreCard";

export default function HomeStores({ stores }: { stores: TStore[] }) {
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
