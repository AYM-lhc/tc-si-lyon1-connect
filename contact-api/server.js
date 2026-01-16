const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();

// Sécurité
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS (autorise le front)
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8080",
    methods: ["POST"],
  })
);

// Anti-spam
app.use(
  "/api/contact",
  rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 10,
  })
);

// Transport Gmail
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Route contact
app.post("/api/contact", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      website,
    } = req.body;

    // Honeypot anti-bot
    if (website) {
      return res.json({ success: true });
    }

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ success: false, error: "Champs manquants" });
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `[Contact] ${subject} — ${firstName} ${lastName}`,
      text: `
Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || "-"}
Objet : ${subject}

Message :
${message}
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Erreur serveur" });
  }
});

// Health check
app.get("/health", (_, res) => res.send("OK"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
