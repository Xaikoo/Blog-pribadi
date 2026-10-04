import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/writing", "/about"].map((path) => ({
    url: `https://xaiko.my.id${path}`,
  }));

  const postRoutes = getPosts().map((post) => ({
    url: `https://xaiko.my.id/posts/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...postRoutes];
}
