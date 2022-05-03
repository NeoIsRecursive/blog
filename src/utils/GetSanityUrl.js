const GetSanityUrl = (query) => {
  const PROJECT_ID = "b139pzd6";
  const DATASET = "production";
  const QUERY = encodeURIComponent(query);
  return `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
};

export default GetSanityUrl;
