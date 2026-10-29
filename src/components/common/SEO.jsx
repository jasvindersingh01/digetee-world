import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  path = "",
  ogType = "website",
  ogImage = "/logo.jpeg",
  schemaData = null,
  keywords = "",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
}) => {
  const siteUrl = "https://digiteeworld.com";
  // Clean path to prevent trailing slash issues (except for home page)
  const cleanPath = path === "/" ? "" : path.replace(/\/$/, "");
  const canonicalUrl = (path === "/" || path === "") ? `${siteUrl}/` : `${siteUrl}${cleanPath}`;
  
  // Format OG Image to be fully qualified URL
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content={robots} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Digitee World" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@Digitee_World" />
      <meta name="twitter:creator" content="@Digitee_World" />

      {/* Structured Schema */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
