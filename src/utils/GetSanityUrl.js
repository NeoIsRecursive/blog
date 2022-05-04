const GetSanityUrl = (query) => {
  const { REACT_APP_PROJECT_ID: PROJECT_ID, REACT_APP_DATASET: DATASET } =
    process.env;
  const QUERY = encodeURIComponent(query);
  return `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
};

export default GetSanityUrl;
