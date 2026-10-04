import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const latestPosts = getPosts().slice(0, 5);

  return (
    <div className="shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">PERSONAL BLOG / 01</p>
        <h1 id="hero-title">
          Catatan tentang hal-hal yang sedang <em>dibangun.</em>
        </h1>
        <div className="hero-bottom">
          <p className="lede">
            Tempat untuk menulis tentang proyek, eksperimen, teknologi, dan
            perjalanan kecil di antaranya.
          </p>
          <Link className="text-link" href="/writing">
            Lihat tulisan <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      <section className="intro-rule" aria-labelledby="now-title">
        <span id="now-title">NOW</span>
        <p>
          Sedang membangun, mencatat, dan menguji hal-hal yang layak disimpan.
        </p>
      </section>

      <section className="section" aria-labelledby="latest-title">
        <div className="section-heading">
          <p className="eyebrow">LATEST</p>
          <h2 id="latest-title">Tulisan terbaru</h2>
        </div>

        {latestPosts.length === 0 ? (
          <div className="empty-state">
            <span className="empty-mark" aria-hidden="true">—</span>
            <div>
              <h3>Belum ada artikel.</h3>
              <p>
                Tulisan pertama akan muncul di sini setelah benar-benar siap.
              </p>
              <Link className="text-link" href="/about">
                Kenali blog ini <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="writing-list homepage-writing-list">
            {latestPosts.map((post, index) => (
              <article className="writing-item" key={post.slug}>
                <p className="post-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="writing-item-body">
                  <p className="post-meta">
                    {post.category} <span aria-hidden="true">·</span> {post.date}{" "}
                    <span aria-hidden="true">·</span> {post.readingTime}
                  </p>
                  <h3>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <Link className="text-link" href={`/posts/${post.slug}`}>
                    Baca tulisan <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
