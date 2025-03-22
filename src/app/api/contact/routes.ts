import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message } = body;

  // Handle form submission logic here (e.g., save to database, send notification)
  console.log('Form submitted:', { name, email, message });

  return NextResponse.json({ message: 'Form submitted successfully!' });
}
