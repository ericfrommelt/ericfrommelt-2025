import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { formId, email } = await request.json();

    // Validate required fields
    if (!formId || !email) {
      return NextResponse.json(
        { error: 'Form ID and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get ConvertKit API key from environment variables
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const apiSecret = process.env.CONVERTKIT_API_SECRET;

    if (!apiKey) {
      console.error('ConvertKit API key not found in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Subscribe to ConvertKit form
    const convertkitResponse = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
        }),
      }
    );

    if (!convertkitResponse.ok) {
      const errorData = await convertkitResponse.text();
      console.error('ConvertKit API error:', errorData);
      
      // Handle specific ConvertKit errors
      if (convertkitResponse.status === 400) {
        return NextResponse.json(
          { error: 'Invalid form ID or email already subscribed' },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    const data = await convertkitResponse.json();

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        subscriber: data.subscription
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscribe API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
