import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// Simple authentication check
function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');

  if (!authHeader) {
    return false;
  }

  // Simple password check: "ivy2026"
  // In production, use proper authentication with JWT, sessions, etc.
  const [type, credentials] = authHeader.split(' ');

  if (type !== 'Basic') {
    return false;
  }

  try {
    const decoded = Buffer.from(credentials, 'base64').toString('utf-8');
    const [username, password] = decoded.split(':');

    return password === 'ivy2026';
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!checkAuth(request)) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="Admin Area"',
          },
        }
      );
    }

    // Fetch all RSVPs
    const rsvpsResult = await db.getAllRSVPs();

    if (!rsvpsResult.success) {
      return NextResponse.json(
        { success: false, error: rsvpsResult.error },
        { status: 500 }
      );
    }

    // Fetch summary statistics
    const summaryResult = await db.getRSVPSummary();

    const summary = summaryResult.success ? summaryResult.data : {
      total_rsvps: 0,
      total_guests: 0,
      with_dietary_restrictions: 0,
      with_messages: 0,
    };

    // Return RSVPs with summary
    return NextResponse.json({
      success: true,
      data: {
        rsvps: rsvpsResult.data,
        summary: summary,
      },
    });

  } catch (error) {
    console.error('Error fetching RSVPs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}

// Disable other methods
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
