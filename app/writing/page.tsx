import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Arsip tulisan Xaiko tentang proyek, eksperimen, teknologi, dan proses.",
  alternates: {
    canonical: "/writing",
  },
  openGraph: {
    type: "website",
    title: "Writing",
    description: "Arsip tulisan Xaiko tentang proyek, eksperimen, teknologi, dan proses.",
    url: "/writing",
    siteName: "Xaiko",
  },
  twitter: {
    card: "summary",
    title: "Writing",
    description: "Arsip tulisan Xaiko tentang proyek, eksperimen, teknologi, dan proses.",
  },
};

export default function WritingPage() {
  const posts = getPosts();

  return (
    <div className="shell page-pad">
      <div className="page-intro">
        <p className="eyebrow">WRITING</p>
        <h1>Catatan yang dipilih untuk tinggal.</h1>
        <p>
          Arsip tulisan akan tumbuh dari pengalaman dan pekerjaan nyata, bukan filler
          untuk memenuhi layout.
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="empty-state large">
          <span className="empty-mark" aria-hidden="true">01</span>
          <div>
            <h2>Arsip masih kosong.</h2>
            <p>
              Belum ada tulisan publik. Saat artikel pertama siap, daftar ini akan
              otomatis menampilkannya.
            </p>
            <Link className="text-link" href="/">
              Kembali ke beranda <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      ) : (
        <section className="writing-list" aria-label="Arsip tulisan">
          {posts.map((post, index) => (
            <article className="writing-item" key={post.slug}>
              <p className="post-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="writing-item-body">
                <p className="post-meta">
                  {post.category} <span aria-hidden="true">·</span> {post.date}{" "}
                  <span aria-hidden="true">·</span> {post.readingTime}
                </p>
                <h2>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <Link className="text-link" href={`/posts/${post.slug}`}>
                  Baca tulisan <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
