import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query } = body;

    return NextResponse.json({
      service: 'enterprise-search',
      query,
      results: [
        { title: 'Sample Result 1', snippet: 'Enterprise search results...', score: 0.95 },
        { title: 'Sample Result 2', snippet: 'More results...', score: 0.85 },
      ],
      message: 'Connect enterprise-search repo for full functionality'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || '';
  
  return NextResponse.json({
    service: 'enterprise-search',
    query,
    results: [],
    status: 'ready'
  });
}