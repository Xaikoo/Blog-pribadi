import { MetadataRoute } from 'next'
import { siteMetadata } from '@/data/siteMetadata'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteMetadata.title,
    short_name: 'Xaiko',
    description: siteMetadata.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#1D1E20',
    theme_color: '#1D1E20',
    icons: [
      { src: '/favicon.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/xaiko-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/xaiko-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
