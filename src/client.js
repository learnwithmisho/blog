import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mm84n7fb",
  dataset: "production",
  useCdn: true,
});
