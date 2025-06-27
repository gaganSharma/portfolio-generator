const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // Use API key from .env
const PORT = process.env.PORT || 5173; // Use API key from .env

// Serve index.html at root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/generate-portfolio", async (req, res) => {
  const { skills, projects, name, email } = req.body;
  const prompt = `Create a professional portfolio webpage (HTML/CSS) for a developer with name: ${name}, email: ${email}, skills: ${skills} and projects: ${projects}. Return only the HTML/CSS code.`;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );
    const data = await response.json();
    console.log("response", data);
    let portfolio = data.candidates[0].content.parts[0].text;

    // Remove markdown fences if present
    portfolio = portfolio
      .replace(/^```html\\n?/i, "")
      .replace(/```$/, "")
      .trim();

    res.json({ portfolio });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate portfolio" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
