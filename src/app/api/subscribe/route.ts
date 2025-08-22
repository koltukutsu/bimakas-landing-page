import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/subscribe
 * Handles waitlist email subscriptions for BiMakas early access
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
            return NextResponse.json({ error: 'Geçerli bir e-posta adresi girin' }, { status: 400 });
        }

        // TODO: Integrate with actual email service (e.g., Mailchimp, SendGrid, etc.)
        // For now, just log the email
        console.log('New waitlist subscription:', email);

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json(
            {
                message: 'E-posta adresiniz başarıyla kaydedildi!',
                email: email
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Subscription error:', error);

        return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 });
    }
}

// Handle other HTTP methods
export async function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
