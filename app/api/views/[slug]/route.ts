import { NextRequest, NextResponse } from 'next/server';

import { redis } from '@/lib/redis';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      {
        error: {
          message: 'Slug is required.',
          code: 'SLUG_REQUIRED'
        }
      },
      { status: 400 }
    );
  }

  const views = (await redis.hget('views', slug)) ?? 0;
  return NextResponse.json({ slug, views });
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      {
        error: {
          message: 'Slug is required.',
          code: 'SLUG_REQUIRED'
        }
      },
      { status: 400 }
    );
  }

  const views = await redis.hincrby('views', slug, 1);
  return NextResponse.json({ slug, views });
}
