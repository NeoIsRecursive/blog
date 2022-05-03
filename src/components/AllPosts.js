import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GetSanityUrl from "../utils/GetSanityUrl";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(GetSanityUrl("*[ _type == 'post' ]"))
      .then((x) => x.json())
      .then(({ result }) => setPosts(result));
  }, []);
  return (
    <div>
      <h2 className="text-2xl">Projects:</h2>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post, index) => {
          return (
            <div key={index} className="p-4 rounded-md drop-shadow-md bg-white text-center">
              <Link to={"/" + post.slug.current}>
                <p className="text-lg font-bold text-sky-300">{post.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPosts;