import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'lawalalameen09@gmail.com',       // ⬅️ Replace with your Gmail
        pass: 'ljbc imul nubc kmld'          // ⬅️ Replace with your 16-digit App Password
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'lawalalameen09@gmail.com',           // ⬅️ Where to receive messages
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error: any) {
    res.status(500).json({ message: error.message || 'Error sending email' });
  }
});

export default router;
