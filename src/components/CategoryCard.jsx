import { data } from "../data/data";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function CategoryCard({ category }) {
  const { title, img, id, gender } = category;

  const genderCategory = gender === "k" ? "KADIN" : "ERKEK";
  const genderSlug = gender === "k" ? "kadin" : "erkek";

  return (
    <div>
      <Link to={`/shop/${id}/${genderSlug}`}>
        <div className="flex justify-center items-center relative hover:scale-105">
          <img
            src={img}
            className="category-card-image border-3 border-transparent object-cover cursor-pointer w-full transition-all duration-300"
          />
          <div className="flex flex-col justify-center items-center text-white tracking-tighter  absolute z-1">
            <h6 className="text-semibold text-2xl leading-6 ">{title}</h6>
            <h6 className="text-base font-bold leading-6 ">{genderCategory}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}
