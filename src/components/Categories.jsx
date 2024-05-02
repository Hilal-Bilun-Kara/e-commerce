import CategoryCard from "./CategoryCard";
import { data } from "../data/data";

export default function Categories() {
  const { categories } = data.shop;
  return (
    <div className="flex sm:flex-col gap-1 md:flex-row justify-center mx-auto px-[4%] sm:mx-[15%] sm:my-[15%]">
      {categories
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5)
        .map((category) => (
          <div
            key={category.id}
            className="flex-grow-1 basis-[210px] sm:mb-[3%]"
          >
            <CategoryCard category={category} />
          </div>
        ))}
    </div>
  );
}
