import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import GetSanityUrl from "../utils/GetSanityUrl";

export default () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(GetSanityUrl("*[ _type == 'post' ]"))
      .then((x) => x.json())
      .then(({ result }) => setPosts(result));
  }, []);
  return (
    <div>
      <h2>All pages</h2>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <Link to={"/" + post.slug.current}>
              <p>{post.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
