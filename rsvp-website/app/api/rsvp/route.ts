import { NextRequest, NextResponse } from 'next/server';
import { z, ZodError } from 'zod';
import { db } from '@/lib/db';

// Zod schema for RSVP validation
const RSVPSchema = z.object({
  guest_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  number_of_guests: z.number()
    .int('Number of guests must be a whole number')
    .min(1, 'At least 1 guest required')
    .max(10, 'Maximum 10 guests allowed'),
  email: z.string()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),
  phone: z.string()
    .max(20, 'Phone number too long')
    .optional()
    .or(z.literal('')),
  dietary_restrictions: z.string()
    .max(500, 'Dietary restrictions text too long')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .max(1000, 'Message too long')
    .optional()
    .or(z.literal('')),
});

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate input with Zod
    const validatedData = RSVPSchema.parse(body);

    // Check RSVP deadline (February 13, 2026 at 6:00 PM)
    const deadline = new Date('2026-02-13T18:00:00');
    const now = new Date();

    if (now > deadline) {
      return NextResponse.json(
        {
          success: false,
          error: 'RSVP deadline has passed. Please contact the host directly.'
        },
        { status: 400 }
      );
    }

    // Clean up empty strings to undefined for optional fields
    const rsvpData = {
      guest_name: validatedData.guest_name,
      number_of_guests: validatedData.number_of_guests,
      email: validatedData.email || undefined,
      phone: validatedData.phone || undefined,
      dietary_restrictions: validatedData.dietary_restrictions || undefined,
      message: validatedData.message || undefined,
    };

    // Save to database
    const result = await db.createRSVP(rsvpData);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 400 }
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'RSVP submitted successfully!',
        data: result.data,
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('RSVP submission error:', error);

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid input data',
          details: error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Disable GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
