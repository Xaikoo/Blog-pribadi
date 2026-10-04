import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="shell">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">PERSONAL BLOG / 01</p>
        <h1 id="hero-title">Catatan tentang hal-hal yang sedang <em>dibangun.</em></h1>
        <div className="hero-bottom">
          <p className="lede">Tempat untuk menulis tentang proyek, eksperimen, teknologi, dan perjalanan kecil di antaranya.</p>
          <Link className="text-link" href="/writing">Lihat tulisan <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="intro-rule" aria-label="Arah blog">
        <span>NOW</span><p>Belum ada tulisan yang dipublikasikan. Ruang ini sengaja dibiarkan jujur sampai tulisan pertama benar-benar siap.</p>
      </section>
      <section className="section" aria-labelledby="latest-title">
        <div className="section-heading"><p className="eyebrow">LATEST</p><h2 id="latest-title">Tulisan terbaru</h2></div>
        {posts.length === 0 ? (
          <div className="empty-state"><span className="empty-mark" aria-hidden="true">—</span><div><h3>Belum ada artikel.</h3><p>Tidak ada placeholder palsu di sini. Artikel akan muncul setelah konten nyata ditulis.</p><Link className="text-link" href="/about">Kenali blog ini <span aria-hidden="true">→</span></Link></div></div>
        ) : null}
      </section>
    </div>
  );
}
