import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Tulisan tidak ditemukan",
      robots: { index: false, follow: false },
    };
  }

  const title = post.title;
  const description = post.excerpt;
  const url = `/posts/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      siteName: "Xaiko",
      publishedTime: post.date,
      section: post.category,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="shell article">
      <header className="article-header">
        <p className="eyebrow">
          {post.category} <span aria-hidden="true">·</span> {post.date}{" "}
          <span aria-hidden="true">·</span> {post.readingTime}
        </p>
        <h1>{post.title}</h1>
      </header>

      <div className="article-body">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <footer className="article-footer">
        <Link className="text-link" href="/writing">
          ← Kembali ke Writing
        </Link>
      </footer>
    </article>
  );
}
