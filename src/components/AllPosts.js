import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GetSanityUrl from "../utils/GetSanityUrl";
import Loading from "./Loading";
import client from "../utils/client";
import urlBuilder from "@sanity/image-url";
const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(GetSanityUrl("*[ _type == 'post' && slug.current != 'about']"))
      .then((x) => x.json())
      .then(({ result }) => setPosts(result));
  }, []);
  return (
    <div>
      <h2 className="text-2xl">Projects:</h2>
      <div className="grid grid-cols-4 gap-4 auto-rows-min">
        {posts.length > 0 ? posts.map((post, index) => {
          return (
            <div key={index} className="p-4 rounded-md drop-shadow-md bg-white text-center aspect-square">
              <Link to={"/" + post.slug.current}>
                {post.mainImage && <img
                className="aspect-square object-cover h-full"
                alt=""
                src={urlBuilder(client)
                  .image(post.mainImage)
                  .width(800)
                  .fit("max")
                  .auto("format")
                  .url()}
              />}
                <p className="text-lg font-bold text-sky-300">{post.title}</p>
              </Link>
            </div>
          );
        }): <Loading />}
      </div>
    </div>
  );
};

export default AllPosts;