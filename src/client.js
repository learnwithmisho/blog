import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "c1sstqvk",
  dataset: "production",
  useCdn: true,
});
