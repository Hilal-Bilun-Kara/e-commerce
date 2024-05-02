import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { data } from "../data/data";

export default function FeaturedPost() {
  return (
    <div className="mt-[5%] md:grid">
      <p className="text-l text-center font-bold mb-[5px] text-[#23A6F0]">
        {data.home.featuredPostsText.h6}
      </p>
      <h1 className="text-center text-4xl text-[#252B42] font-bold mb-[10px]">
        {data.home.featuredPostsText.h3}
      </h1>
      <p className="text-m text-center mt-[5px] text-[#737373]">
        {data.home.featuredPostsText.p}{" "}
      </p>
      <div className="flex gap-4 mt-10 mx-[40px] my-[70px] md:grid">
        {data.home.featuredPosts.map((post) => (
          <div key={post.id} className="custom-box-shadow border">
            <div className="relative">
              <img
                src={post.img}
                className="w-full h-[350px] object-cover"
                alt={post.h4}
              />
              <div className="absolute top-5 left-5 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-[4px]">
                NEW
              </div>
            </div>
            <div className="p-6">
              <div className="flex gap-3  mt-3 mb-5">
                {post.links.map((link, index) => (
                  <span
                    key={index}
                    className="text-xs font-normal cursor-pointer text-[#737373] hover:text-[#8EC2F2]"
                  >
                    {link}
                  </span>
                ))}
              </div>
              <h4 className="text-[#252B42] text-xl font-normal leading-[30px]">
                {post.h4}
              </h4>
              <p className="text-[#737373] text-sm font-normal">{post.p}</p>
              <div className="flex justify-between mt-5 mb-5">
                <div className="flex items-center mt-2 md:mr-8">
                  <FontAwesomeIcon
                    icon={faClock}
                    size="xs"
                    className="text-[#23A6F0] mb-1 mr-2"
                  />
                  <p className="text-[#737373] text-xs font-normal">
                    {post.date}
                  </p>
                </div>
                <div className="flex items-center gap-4 ">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    size="sm"
                    className="text-[#23856D] mb-1"
                  />
                  <p className="text-[#737373] text-xs font-normal">
                    {post.text}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-5">
                <p className="text-[#737373] text-sm font-bold">
                  {post.learnMore}
                </p>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  size="lg"
                  className="text-[#23A6F0] mb-1 mt-1 mr-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
