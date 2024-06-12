// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//     const { email, subject, message } = await req.json();
//     console.log("Hello" + email, subject, message, fromEmail);
//     try {
//         const data = await resend.emails.send({
//             from: fromEmail,
//             to: [fromEmail, email],
//             subject: subject,
//             react: (
//                 <>
//                     <h1>{subject}</h1>
//                     <p>Thank you for contacting me!</p>
//                     <p>New message submitted:</p>
//                     <p>{message}</p>
//                 </>
//             ),
//         });
//         return NextResponse.json("status: " + data);
//     } catch (error) {
//         console.log("Error found: " + error.message);
//         return NextResponse.json({ error });
//     }
// }