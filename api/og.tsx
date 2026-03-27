import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const SIZE = {
  width: 1200,
  height: 630,
};

export default function handler(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') ?? 'Kong Ji Yu Portfolio').slice(0, 80);
  const subtitle = (searchParams.get('subtitle') ?? 'iOS and Full-Stack Projects').slice(0, 100);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'radial-gradient(circle at top left, #1f2937 0%, #0b0f19 55%, #05070d 100%)',
          color: '#f9fafb',
          padding: '52px',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: 24, letterSpacing: '0.18em' }}>
          <span style={{ color: '#34d399' }}>●</span>
          <span>KONGJY.SYS</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ fontSize: 66, lineHeight: 1.05, fontWeight: 700, textTransform: 'uppercase' }}>{title}</div>
          <div style={{ fontSize: 30, color: '#9ca3af', letterSpacing: '0.05em' }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#d1d5db' }}>
          <span>Apple Swift Student Challenge 2026 Winner</span>
          <span>jy-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    SIZE,
  );
}