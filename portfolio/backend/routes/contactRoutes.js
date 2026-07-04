import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save to MongoDB
    const newMessage = await Contact.create({
      name,
      email,
      message,
    });

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS:",
      process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌"
    );

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify Gmail connection
    await transporter.verify();

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <table border="1" cellpadding="10" cellspacing="0">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>
        </table>

        <br>

        <p>This message was sent from your portfolio website.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      data: newMessage,
    });
  } catch (error) {
    console.error("CONTACT ROUTE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;