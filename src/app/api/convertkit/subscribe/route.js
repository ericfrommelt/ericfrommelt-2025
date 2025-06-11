import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    console.log('🔍 API Route called');
    const { formId, email } = await request.json();
    console.log('📧 Received data:', { formId, email });

    // Validate required fields
    if (!formId || !email) {
      console.log('❌ Missing required fields');
      return NextResponse.json(
        { error: 'Form ID and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format:', email);
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get ConvertKit API key from environment variables
    const apiKey = process.env.CONVERTKIT_API_KEY;
    
    console.log('🔑 API Key exists:', !!apiKey);
    console.log('🔑 API Key length:', apiKey?.length);

    if (!apiKey) {
      console.error('❌ ConvertKit API key not found in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('🚀 Making request to ConvertKit API...');
    
    // Use the public API endpoint which is more reliable
    const convertkitUrl = `https://api.convertkit.com/v3/forms/${formId}/subscribe`;
    console.log('📍 URL:', convertkitUrl);
    
    const requestBody = {
      api_key: apiKey,
      email: email,
    };
    console.log('📦 Request body:', requestBody);

    const convertkitResponse = await fetch(convertkitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    console.log('📡 ConvertKit response status:', convertkitResponse.status);
    console.log('📡 ConvertKit response headers:', Object.fromEntries(convertkitResponse.headers.entries()));

    if (!convertkitResponse.ok) {
      const errorData = await convertkitResponse.text();
      console.error('❌ ConvertKit API error:', {
        status: convertkitResponse.status,
        statusText: convertkitResponse.statusText,
        errorData
      });
      
      // Parse error details
      let errorMessage = 'Failed to subscribe to newsletter';
      try {
        const parsedError = JSON.parse(errorData);
        errorMessage = parsedError.message || parsedError.error || errorMessage;
      } catch (e) {
        errorMessage = errorData || errorMessage;
      }
      
      // Handle specific ConvertKit errors
      if (convertkitResponse.status === 400) {
        return NextResponse.json(
          { error: `ConvertKit error: ${errorMessage}` },
          { status: 400 }
        );
      }
      
      if (convertkitResponse.status === 404) {
        return NextResponse.json(
          { error: 'Form not found. Please check your form ID.' },
          { status: 400 }
        );
      }
      
      return NextResponse.json(
        { error: `ConvertKit API error: ${errorMessage}` },
        { status: 500 }
      );
    }

    const data = await convertkitResponse.json();
    console.log('✅ ConvertKit API success:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        subscriber: data.subscription
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('💥 Subscribe API error:', error);
    console.error('Stack trace:', error.stack);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
