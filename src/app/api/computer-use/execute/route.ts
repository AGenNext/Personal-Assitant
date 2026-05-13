import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { task } = body;

    return NextResponse.json({
      service: 'computer-use-agent',
      status: 'ready',
      task: task || '',
      result: 'Connect computer-use-agent repo for full desktop automation',
      message: 'Computer use agent ready'
    });
  } catch (error) {
    return NextResponse.json({ error: 'Computer use failed' }, { status: 500 });
  }
}