// Contact Form

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        contactForm.reset();

    });

}

// Start Learning Button

const startCourseBtn = document.getElementById("startCourseBtn");

if (startCourseBtn) {

    startCourseBtn.addEventListener("click", function () {

        alert("Course Started Successfully! Happy Learning.");

    });

}

// Progress Tracking

// ================================
// Progress Tracking
// ================================

function updateProgress(buttonId, progressId, startValue) {

    const button = document.getElementById(buttonId);
    const progressBar = document.getElementById(progressId);

    if (!button || !progressBar) return;

    let progress = startValue;

    button.addEventListener("click", function () {

        if (progress < 100) {

            progress += 10;

            progressBar.style.width = progress + "%";
            progressBar.textContent = progress + "%";

        }

        if (progress === 100) {

            alert("Congratulations! You completed this course.");

        }

    });

}

// HTML Course
updateProgress("htmlBtn", "htmlProgress", 80);

// JavaScript Course
updateProgress("jsBtn", "jsProgress", 60);

// Python Course
updateProgress("pythonBtn", "pythonProgress", 45);