import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amdadul1807107@gmail.com',
        pass: 'ctyplxmrxbcoasox',
      }
    })

    const mailOption = {
      from: fromMail,
      to: "amdad.zatiq@gmail.com", // Your email
      subject: `New Waitlist Signup`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color: #0165FE;">New Waitlist Entry</h2>
          <p style="font-size: 16px;">
            A new user with the email <a href="mailto:${fromMail}" style="color: #0165FE;">${fromMail}</a> has just joined the waitlist!
          </p>
          <p style="font-size: 14px; color: #666;">This email was automatically generated by the waitlist system.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}