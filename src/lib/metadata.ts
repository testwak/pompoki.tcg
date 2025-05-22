import type { Metadata } from 'next/types';

// Determine the base URL for development or production
export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);

// Generate metadata with full Open Graph and Twitter card info
export function createMetadata(override: Metadata): Metadata {
  const imageUrl = new URL('/image/logo.GIF', baseUrl).toString(); // ✅ Full absolute URL

  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl.toString(),
      images: [imageUrl], // Must be an array for og:image
      siteName: 'POMPOKI.tcg',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@pompokibot',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [imageUrl], // Also should be array
      ...override.twitter,
    },
  };
}
