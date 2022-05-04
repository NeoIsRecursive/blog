import react from "react";
import { useEffect, useState } from "react";
import GetSanityUrl from "../utils/GetSanityUrl.js";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import client from "../utils/client.js";
import Loading from "./Loading.js";

const SinglePost = ({ slug }) => {
  if (!slug) slug = window.location.pathname.substring(1);

  const [post, setPost] = useState(false);
  const [loading, setLoading] = useState(true);

  const Query = `*[ _type == 'post' && slug.current == '${slug}']`;

  useEffect(() => {
    fetch(GetSanityUrl(Query))
      .then((x) => x.json())
      .then(({ result }) => {
        setPost(result[0]);
        setLoading(!loading);
      });
  }, []);
  if (loading) return <Loading />;
  if (!loading && !post) return "Not found";
  return (
    <div className="prose mx-auto">
      {post.mainImage && (
        <img
          alt=""
          className="max-w-full max-h-[90vh]"
          src={urlBuilder(client)
            .image(post.mainImage)
            .width(800)
            .fit("max")
            .auto("format")
            .url()}
        />
      )}
      <h1>{post.title}</h1>
      <PortableText
        value={post.body}
        components={{
          types: {
            image: ({ value }) => (
              <img
                alt=""
                src={urlBuilder(client)
                  .image(value)
                  .width(800)
                  .fit("max")
                  .auto("format")
                  .url()}
              />
            ),
          },
        }}
      />
    </div>
  );
};

export default SinglePost;
