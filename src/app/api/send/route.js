import { NextResponse } from "next/server";

const nodemailer = require('nodemailer');
require('dotenv').config();

export async function POST(req, res) {
    const { email, subject, message } = await req.json();


    try {
        let transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Set up email data
        let mailOptions = {
            from: `"Your Name" <${process.env.SMTP_USER}>`, // Sender address
            to: 'sisodiya.s@northeastern.edu', // List of recipients
            subject: subject, // Subject line
            text: email + "/n" + message, // Plain text body
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return NextResponse.json({ error: error }, { status: 500 })
            }
            console.log('Message sent: %s', info.messageId);
        });

        return NextResponse.json({ message: 'sent' }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 })
    }
}