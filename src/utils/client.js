import sanityClient from "@sanity/client";

const { REACT_APP_PROJECT_ID: PROJECT_ID, REACT_APP_DATASET: DATASET } =
  process.env;

export default sanityClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: "2021-03-25",
  useCdn: true,
});
