import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <article className="shell article"><p className="eyebrow">{post.category} · {post.date} · {post.readingTime}</p><h1>{post.title}</h1>{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article>;
}
