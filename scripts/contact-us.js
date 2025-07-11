document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const statusEl = document.getElementById("formMessage");

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
        statusEl.textContent = "✅ Message sent successfully!";
        statusEl.className = "form-message success";
      } else {
        return response.json().then((data) => {
          throw new Error(data.error || "Something went wrong.");
        });
      }
    })
    .catch((error) => {
      statusEl.textContent = `❌ ${error.message}`;
      statusEl.className = "form-message error";
    });
});