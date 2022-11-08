import HomeStores from "./components/home/HomeStores";

async function getStores() {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${url}/client/stores`, { next: { revalidate: 60 } });

  const data = await res.json();

  return data;
}

export default async function Page() {
  const stores = await getStores();

  return (
    <>
      <HomeStores stores={stores} />
    </>
  );
}
