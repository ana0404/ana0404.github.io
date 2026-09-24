import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  keywords?: string;
  author?: string;
  twitterHandle?: string;
  canonical?: string;
}

const defaultMetadata = {
  title: 'Anamika Dashore | Data Scientist & AI Engineer',
  description:
    'Anamika Dashore is a data scientist and AI engineer building reliable ML infrastructure, predictive analytics, and intelligent systems for modern teams.',
  url: 'https://ana0404.github.io/',
  image: 'https://ana0404.github.io/assets/og-image.png',
  keywords:
    'Anamika Dashore, Data Scientist, AI Engineer, Machine Learning Engineer, Data Engineer, ML Infrastructure, Predictive Analytics, NLP, Distributed Systems, Model Deployment',
  author: 'Anamika Dashore',
  twitterHandle: '@anamika_dashore',
  canonical: 'https://ana0404.github.io/',
};

export default function Seo({
  title,
  description,
  url,
  image,
  keywords,
  author,
  twitterHandle,
  canonical,
}: SeoProps) {
  const metadata = {
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    url: url || defaultMetadata.url,
    image: image || defaultMetadata.image,
    keywords: keywords || defaultMetadata.keywords,
    author: author || defaultMetadata.author,
    twitterHandle: twitterHandle || defaultMetadata.twitterHandle,
    canonical: canonical || defaultMetadata.canonical,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords} />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={metadata.canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:url" content={metadata.url} />
      <meta property="og:image" content={metadata.image} />
      <meta property="og:site_name" content="Anamika Dashore Portfolio" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={metadata.twitterHandle} />
      <meta name="twitter:creator" content={metadata.twitterHandle} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:image" content={metadata.image} />

    </Helmet>
  );
}
