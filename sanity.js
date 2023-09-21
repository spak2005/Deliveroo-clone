import sanityCli from "./sanity/sanity.cli";
import ImageUrlBuilder from "@sanity/image-url";
const client = sanityCli({
    projectId: "5gztvpw3",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21"
})

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;