import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();

// ✅ simplest CORS (sab allow)
app.use(cors());

app.use(express.json());

// ✅ test route
app.get("/", (req, res) => {
  res.send("Server working ✅");
});

// ✅ email route
app.post("/send-email", async (req, res) => {
  console.log("📩 Request received");

  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",
        pass: "YOUR_APP_PASSWORD",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "YOUR_EMAIL@gmail.com",
      subject: subject || "New Message",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ success: false });
  }
});

app.listen(5001, () => console.log("🚀 Server running on http://localhost:5001"));