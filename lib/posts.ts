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

export function getPosts() {
  return [...posts].sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);

    if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
      return 0;
    }

    return bTime - aTime;
  });
}

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
