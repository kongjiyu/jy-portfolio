import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  image?: string;
  imageSubtitle?: string;
  type?: 'website' | 'article';
};

const DEFAULT_SITE_NAME = 'Kong Ji Yu Portfolio';

const upsertMeta = (selector: string, attribute: 'name' | 'property', value: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, selector.match(/"(.+)"/)?.[1] ?? '');
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', value);
};

const Seo = ({
  title,
  description,
  path = '/',
  keywords,
  image,
  imageSubtitle = 'iOS and Full-Stack Projects',
  type = 'website',
}: SeoProps) => {
  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL ?? 'https://jy-portfolio-six.vercel.app';
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const fullUrl = `${siteUrl}${normalizedPath}`;
    const fallbackImage = `/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(imageSubtitle)}`;
    const selectedImage = image ?? fallbackImage;
    const imageUrl = selectedImage.startsWith('http') ? selectedImage : `${siteUrl}${selectedImage}`;

    document.title = `${title} | ${DEFAULT_SITE_NAME}`;

    upsertMeta('meta[name="description"]', 'name', description);
    upsertMeta('meta[name="robots"]', 'name', 'index,follow,max-image-preview:large');
    upsertMeta('meta[property="og:type"]', 'property', type);
    upsertMeta('meta[property="og:title"]', 'property', `${title} | ${DEFAULT_SITE_NAME}`);
    upsertMeta('meta[property="og:description"]', 'property', description);
    upsertMeta('meta[property="og:url"]', 'property', fullUrl);
    upsertMeta('meta[property="og:site_name"]', 'property', DEFAULT_SITE_NAME);
    upsertMeta('meta[property="og:image"]', 'property', imageUrl);
    upsertMeta('meta[name="twitter:card"]', 'name', 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', 'name', `${title} | ${DEFAULT_SITE_NAME}`);
    upsertMeta('meta[name="twitter:description"]', 'name', description);
    upsertMeta('meta[name="twitter:image"]', 'name', imageUrl);

    if (keywords) {
      upsertMeta('meta[name="keywords"]', 'name', keywords);
    }

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);
  }, [description, image, imageSubtitle, keywords, path, title, type]);

  return null;
};

export default Seo;