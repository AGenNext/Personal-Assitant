import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, action } = body;

    return NextResponse.json({
      service: 'browser-agent',
      status: 'ready',
      url: url || 'https://example.com',
      action: action || 'navigate',
      message: 'Connect browser-agent repo for full automation'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Browser agent failed' }, { status: 500 });
  }
}