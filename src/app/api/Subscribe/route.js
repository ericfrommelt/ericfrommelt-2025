// This file is deprecated - the actual API route is at /api/convertkit/subscribe/route.js
// You can safely delete this file if no other code references it.

import { NextResponse } from 'next/server';

export async function POST(request) {
  return NextResponse.json(
    { error: 'This endpoint has been moved to /api/convertkit/subscribe' },
    { status: 301 }
  );
}