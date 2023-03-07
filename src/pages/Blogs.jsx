import React from "react";
import Aside from "../components/Aside";
import BlogsData from "../data/blogs.json";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Blogs = () => {
  return (
    <div>
      <div className="flex">
        <Aside />
        {/* -------------------------- */}
        <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
          {BlogsData.map((blog) => (
            <div key={blog.id}>
              <div className="px-4 max-w-5xl mt-4 text-left m-auto flex items-start">
                <p>
                  <BiLeftArrow className="text-xl text-red-300 inline" />
                </p>
                <h1 className="text-red-300 text-xl">{blog.id}</h1>
                <p>
                  <BiRightArrow className="text-xl mr-1 text-red-300 inline md:mr-3" />
                </p>
                <h2 className="text-blue-300 md:text-2xl text-xl">
                  {blog.title}
                </h2>
              </div>
              <div className="px-4 max-w-5xl mt-4 text-left m-auto text-gray-300">
                {blog.innerText.map((item) => (
                  <div key={item.id}>
                    <h1>
                      {item.innerTitle} {item.description}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
