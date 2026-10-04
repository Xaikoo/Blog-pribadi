import Link from "next/link";
export default function NotFound() { return <div className="shell page-pad"><p className="eyebrow">404</p><h1>Halaman tidak ditemukan.</h1><p>Alamat ini tidak punya halaman yang bisa dibaca.</p><Link className="text-link" href="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link></div>; }
