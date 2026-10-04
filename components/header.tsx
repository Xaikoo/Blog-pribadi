import Link from "next/link";

export function Header() {
  return (
    <>
      <a className="skip-link" href="#content">Lewati ke konten</a>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="wordmark" href="/" aria-label="Xaiko — beranda">XAIKO</Link>
          <nav className="nav" aria-label="Navigasi utama">
            <Link href="/writing">Writing</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
