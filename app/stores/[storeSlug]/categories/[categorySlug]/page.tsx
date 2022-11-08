import { TCategory } from "../../../../../types/category";
import ProductCard from "../../../../components/products/ProductCard";

async function getCategory(slug: string) {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${url}/client/categories/${slug}`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();

  return data;
}

export default async function StorePage({ params }: { params: any }) {
  const { categorySlug } = params;

  const category: TCategory = await getCategory(categorySlug);

  return (
    <div>
      <div>{category.name}</div>
      <div className="grid grid-cols-3 gap-10">
        {category.products.map((product) => (
          <div key={product.slug} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
