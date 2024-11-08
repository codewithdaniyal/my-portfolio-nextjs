import { Resend } from 'resend';
import { NextResponse } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        const { email, subject, message } = await req.json(); // Parse JSON from request
        const data = await resend.emails.send({
            from: fromEmail,
            to: ['datariq0311@gmail.com'],
            subject: subject || 'Hello world',
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting us.</p>
                    <p>{message}</p>
                </>
            ),
        });
        
        return NextResponse.json(data); // Return JSON response
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
