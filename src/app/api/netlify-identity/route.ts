import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the identity event (you can handle different events as needed)
    console.log('Netlify Identity webhook received:', body);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Netlify Identity webhook:', error);
    return NextResponse.json({ error: 'Failed to process webhook' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Netlify Identity webhook endpoint active' });
} 