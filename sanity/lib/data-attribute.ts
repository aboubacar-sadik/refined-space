import { createDataAttribute } from "next-sanity";

export const createSanityDataAttribute = (id: string, type: string) =>
  createDataAttribute({
    baseUrl: "/studio",
    id,
    type,
  });
