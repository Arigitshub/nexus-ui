import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://joyprotocol.co'
const SITE_NAME = 'The Joy Protocol'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description = 'A practical, 48-hour protocol to reset your dopamine baseline and architect deep joy in the digital age.',
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Reclaim Your Focus`
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}
