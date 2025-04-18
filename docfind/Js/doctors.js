document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("serach-doctor");
    const specialtySelect = document.getElementById("specialty");
    const dateInput = document.getElementById("date");
    const applyBtn = document.querySelector(".find-advance button");
    const doctorContainer = document.getElementById("doctorContainer");
  
    function renderDoctors(filteredDoctors) {
      doctorContainer.innerHTML = "";
      if (filteredDoctors.length === 0) {
        doctorContainer.innerHTML = "<p>No doctors found matching your criteria.</p>";
        return;
      }
  
      filteredDoctors.forEach(doctor => {
        const card = document.createElement("div");
        card.className = "doctor-card";
        card.innerHTML = `
          <img src="${doctor.image}" alt="${doctor.name}">
          <h3>${doctor.name}</h3>
          <p class="specialty">${doctor.specialty}</p>
          <p class="rating">⭐ ${doctor.rating} (${doctor.reviews} reviews)</p>
          <p class="experience">🕒 ${doctor.experience} years experience</p>
          <div class="slots">
            ${doctor.slots.map(slot => `<span class="slot">${slot}</span>`).join("")}
          </div>
          <div class="buttons">
            <a href="schedule.html" class="book-button">Book Appointment</a>
            <a href="#">View Profile</a>
          </div>
          ${doctor.isTopRated ? `<span class="tag top-rated">Top Rated</span>` : ""}
          ${doctor.isAvailableToday ? `<span class="tag available-today">Available Today</span>` : ""}
        `;
        doctorContainer.appendChild(card);
      });
    }
  
    function filterDoctors() {
      const query = searchInput.value.trim().toLowerCase();
      const specialty = specialtySelect.value;
      const selectedDate = dateInput.value;
  
      const filtered = doctors.filter(doctor => {
        const matchNameOrSpecialty =
          doctor.name.toLowerCase().includes(query) ||
          doctor.specialty.toLowerCase().includes(query);
  
        const matchSpecialty =
          specialty === "all" ||
          doctor.specialty.toLowerCase() === specialty.toLowerCase();
  
          const matchDate = !selectedDate || doctor.slots.some(slot => {
            let slotDateStr = slot;
          
            if (slot.includes("Today")) {
              const today = new Date();
              slotDateStr = today.toDateString(); // Convert full date
            } else if (slot.includes("Tomorrow")) {
              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              slotDateStr = tomorrow.toDateString();
            } else {
              // Match format like "Apr 15"
              const match = slot.match(/([A-Za-z]+ \d{1,2})/);
              if (match) {
                slotDateStr = new Date(`${match[1]}, 2025`).toDateString();
              }
            }
          
            const selected = new Date(selectedDate).toDateString();
            return slotDateStr === selected;
          });
          
  
        return matchNameOrSpecialty && matchSpecialty && matchDate;
      });
  
      renderDoctors(filtered);
    }
  
    applyBtn.addEventListener("click", filterDoctors);
    searchInput.addEventListener("input", filterDoctors);
  
    // Initial render
    renderDoctors(doctors);
  });
  