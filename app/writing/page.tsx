import Link from "next/link";
import { posts } from "@/lib/posts";

export default function WritingPage() {
  return <div className="shell page-pad">
    <div className="page-intro"><p className="eyebrow">WRITING</p><h1>Catatan yang dipilih untuk tinggal.</h1><p>Arsip tulisan akan tumbuh dari pengalaman dan pekerjaan nyata, bukan filler untuk memenuhi layout.</p></div>
    {posts.length === 0 ? <div className="empty-state large"><span className="empty-mark" aria-hidden="true">01</span><div><h2>Arsip masih kosong.</h2><p>Belum ada tulisan publik. Saat artikel pertama siap, daftar ini akan otomatis menampilkannya.</p><Link className="text-link" href="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link></div></div> : <div>{posts.map((post) => <article key={post.slug}><Link href={`/posts/${post.slug}`}>{post.title}</Link></article>)}</div>}
  </div>;
}
