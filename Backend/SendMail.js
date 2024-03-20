import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const { SMTP_MAIL, SMTP_PASSWORD } = process.env;

const sendMail = async (email, mailSubject, content) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: SMTP_MAIL,
      to: email,
      subject: mailSubject,
      html: content,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Mail sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending mail:', error);
    throw error;
  }
};

export default sendMail;

// https://www.youtube.com/watch?v=QDIOBsMBEI0