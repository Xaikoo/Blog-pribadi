import Image from "next/image";

export function Footer() {
  return (
    <footer className="pt-8 pb-24">
      <div className="w-full border-t border-gray-200 dark:border-gray-800" />
      <div className="mx-auto max-w-4xl px-4 mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <Image src="/favicon.png" alt="Xaiko" title="Xaiko" width={32} height={32} className="h-8 w-8 rounded-md object-contain" />
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()}&nbsp;
          <span className="font-medium">Xaiko</span>
          <span className="mx-2 text-gray-300 dark:text-gray-700">•</span>
          <span>All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <a href="/sitemap.xml" className="hover:underline">sitemap.xml</a>
          <span className="hidden md:inline-block text-gray-300 dark:text-gray-700">•</span>
          <a href="//www.dmca.com/Protection/Status.aspx?ID=2d1bfc6e-c9f3-473a-b8a4-0e26504c1da5" target="_blank" rel="noopener noreferrer" className="hover:underline">DMCA</a>
        </div>
      </div>
    </footer>
  );
}
