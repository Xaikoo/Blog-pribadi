export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  content: string[];
};

// Intentionally empty until real posts are authored. Never fabricate portfolio/blog metrics.
export const posts: Post[] = [];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
