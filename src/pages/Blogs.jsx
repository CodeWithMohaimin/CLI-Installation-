import React from "react";
import Aside from "../components/Aside";
import BlogsData from "../data/blogs.json";

const Blogs = () => {
  return (
    <div>
      <div className="flex">
        <Aside />
        {/* -------------------------- */}
        <div className="-z-10 bg-gradient-to-r from-gray-900 via-gray-500 to-gray-900 text-center sticky top-0 left-0 w-full">
          {BlogsData.map((blog, index) => (
            <div key={index}>
              <div className="px-4 max-w-5xl mt-4 text-left m-auto">
                <h1 className="text-blue-300 md:text-2xl text-xl">
                  {blog.title}
                </h1>
                <a
                  className="cursor-pointer text-red-300"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/entrptaher"
                >
                  {blog.writer}
                </a>
              </div>
              <div className="text-gray-300 max-w-5xl text-left m-auto md:px-6 px-2">
                {blog.innerText.map((item) => (
                  <div key={item.id}>
                    <p className="mt-4 text-blue-200">{item.innerTitle}</p>
                    {item.description.map((list, index) => (
                      <ul key={index}>
                        <li className="border-b-2 border-gray-500 mb-2 inline-block ml-4">
                          {list.listItem}
                        </li>
                      </ul>
                    ))}
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
