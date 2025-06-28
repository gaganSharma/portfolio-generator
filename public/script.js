document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("portfolioForm");
  const resultDiv = document.getElementById("result");
  const errorDiv = document.getElementById("error");
  const portfolioLink = document.getElementById("portfolioLink");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorDiv.textContent = "";
    resultDiv.style.display = "none";
    submitBtn.disabled = true;
    submitBtn.textContent = "Generating...";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const skills = document.getElementById("skills").value.trim();
    const projects = document.getElementById("projects").value.trim();

    try {
      const response = await fetch("/generate-portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, skills, projects }),
      });
      const data = await response.json();

      if (data.portfolio) {
        let cleaned = data.portfolio
          .replace(/^```html\s*/, "")
          .replace(/```$/, "")
          .trim();
        const blob = new Blob([cleaned], { type: "text/html" });
        const fileURL = URL.createObjectURL(blob);
        portfolioLink.href = fileURL;
        resultDiv.style.display = "block";
      } else {
        throw new Error(data.error || "Unknown error");
      }
    } catch (err) {
      errorDiv.textContent = "Error generating portfolio. Please try again.";
    }
    submitBtn.disabled = false;
    submitBtn.textContent = "Generate Portfolio";
  });
});
