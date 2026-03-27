const MAX_TITLE_LENGTH = 80;
const MAX_SUBTITLE_LENGTH = 110;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const config = {
  runtime: 'edge',
};

export default function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawTitle = searchParams.get('title') ?? 'Kong Ji Yu Portfolio';
  const rawSubtitle = searchParams.get('subtitle') ?? 'iOS and Full-Stack Projects';

  const title = escapeXml(rawTitle.slice(0, MAX_TITLE_LENGTH));
  const subtitle = escapeXml(rawSubtitle.slice(0, MAX_SUBTITLE_LENGTH));

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title}">
  <defs>
    <radialGradient id="bg" cx="15%" cy="10%" r="120%">
      <stop offset="0%" stop-color="#1f2937"/>
      <stop offset="55%" stop-color="#0b0f19"/>
      <stop offset="100%" stop-color="#05070d"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>

  <g font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fill="#f9fafb">
    <text x="56" y="76" font-size="24" letter-spacing="6">KONGJY.SYS</text>

    <text x="56" y="290" font-size="72" font-weight="700" text-transform="uppercase">${title}</text>
    <text x="56" y="348" font-size="34" fill="#9ca3af" letter-spacing="1.5">${subtitle}</text>

    <text x="56" y="584" font-size="24" fill="#d1d5db">Apple Swift Student Challenge 2026 Winner</text>
    <text x="808" y="584" font-size="24" fill="#d1d5db">jy-portfolio-six.vercel.app</text>
  </g>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
