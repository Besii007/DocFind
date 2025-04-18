// Step Navigation
const step1 = document.querySelector(".schedule-first");
const step2 = document.querySelector(".schedule-second");
const step3 = document.querySelector(".schedule-third");
const step4 = document.querySelector(".schedule-fourth");

const toStep2 = document.getElementById("tostep2");
const toStep3 = document.getElementById("tostep3");
const toStep4 = document.getElementById("tostep4");
const backStep1 = document.getElementById("backstep1");
const backStep2 = document.getElementById("backstep2");
const backStep3 = document.getElementById("backstep3");

const steps = document.querySelectorAll(".schedule-steps .number");
const lines = document.querySelectorAll(".schedule-steps .line");

function showStep(current, next, index) {
  current.style.display = "none";
  next.style.display = "block";

  steps.forEach((s, i) => s.classList.toggle("active", i <= index));
  lines.forEach((line, i) => {
    line.style.backgroundColor = i < index ? "#1e88e5" : "#d1d1d1";
  });
}

toStep2.addEventListener("click", () => showStep(step1, step2, 1));
toStep3.addEventListener("click", () => showStep(step2, step3, 2));
toStep4.addEventListener("click", () => showStep(step3, step4, 3));
backStep1.addEventListener("click", () => showStep(step2, step1, 0));
backStep2.addEventListener("click", () => showStep(step3, step2, 1));
backStep3.addEventListener("click", () => showStep(step4, step3, 2));

// Radio Button Group Logic
const voteRadios = document.querySelectorAll("input[name='firstvisit']");
const voteDivs = document.querySelectorAll(".vote");

voteRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    voteDivs.forEach(div => div.classList.remove("selected"));
    if (radio.checked) {
      radio.parentElement.classList.add("selected");
    }
  });
});

// Popup Logic
const submitBtn = document.getElementById("sumbitbtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const showDetailsBtn = document.getElementById("showDetailsBtn");
const detailsContainer = document.getElementById("detailsContainer");
const closePopup = document.getElementById("closePopup");

submitBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.style.display = "block";
});

// Show Details Button
showDetailsBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const specialty = document.getElementById("specialty").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("textbox").value;
  const firstVisit = document.querySelector("input[name='firstvisit']:checked");
  const firstVisitAnswer = firstVisit ? firstVisit.value : "Not specified";

  detailsContainer.innerHTML = `
    <strong>Name:</strong> ${name} ${surname}<br>
    <strong>Email:</strong> ${email || "Not provided"}<br>
    <strong>Phone:</strong> ${phone}<br><br>
    <strong>Specialty:</strong> ${specialty}<br>
    <strong>Doctor:</strong> ${doctor}<br>
    <strong>Date & Time:</strong> ${date} at ${time}<br><br>
    <strong>First Visit:</strong> ${firstVisitAnswer}<br>
    <strong>Notes:</strong> ${notes || "No additional notes"}
  `;

  detailsContainer.style.display = "block";
  showDetailsBtn.style.display = "none";
});

// Close & Reset After Popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.style.display = "none";

  // Reset all form fields
  document.getElementById("name").value = "";
  document.getElementById("surname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("specialty").selectedIndex = 0;
  document.getElementById("doctor").selectedIndex = 0;
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("textbox").value = "";
  document.querySelectorAll("input[name='firstvisit']").forEach(r => r.checked = false);
  document.getElementById("terms").checked = false;
  voteDivs.forEach(div => div.classList.remove("selected"));

  // Reset steps to step 1
  step1.style.display = "block";
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";

  steps.forEach((step, i) => {
    step.classList.remove("active");
    if (i === 0) step.classList.add("active");
  });

  lines.forEach(line => {
    line.style.backgroundColor = "#d1d1d1";
  });

  // Reset popup details
  detailsContainer.innerHTML = "";
  detailsContainer.style.display = "none";
  showDetailsBtn.style.display = "inline-block";
});
