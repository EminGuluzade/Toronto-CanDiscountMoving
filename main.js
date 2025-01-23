// Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");
const body = document.body;

if (navToggle) {
  navToggle.addEventListener("click", () => {
    body.classList.toggle("menu-open");
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("toggle");
    // document.body.style.overflow = "hidden";
  });
}

//
const faqQuestions = document.querySelectorAll("#faq-question");
const faqItems = document.querySelectorAll("#faq-item");
faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    const question = item.querySelector("#faq-question");
    const answer = item.querySelector("#faq-answer");
    const isOpen = answer.style.maxHeight;
    const plusIcon = question.querySelector(".plus-icon");
    const minusIcon = question.querySelector(".minus-icon");

    // Reset all
    document.querySelectorAll("#faq-answer").forEach((ans) => {
      ans.style.maxHeight = null;
      ans.previousElementSibling.querySelector(".plus-icon").style.display =
        "block";
      ans.previousElementSibling.querySelector(".minus-icon").style.display =
        "none";
    });

    document.querySelectorAll("#faq-item").forEach((item) => {
      item.classList.remove("faq__item--active");
    });

    // Toggle current
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
      item.classList.add("faq__item--active");
    }
  });
});

//Footer
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  if (currentYear) {
    document.getElementById("footer-date").innerText = currentYear;
  }
});

document.querySelectorAll(".how-it-work__step").forEach((step,index) => {
  const header = step.querySelector(".how-it-work__step-header");
  const description = step.querySelector(".how-it-work__step-description");
  const line = step.querySelector(".how-it-work__step-line");
  // Set the first step as active by default
  if (index === 0) {
    step.classList.add("how-it-work__step--active");
    description.style.maxHeight = description.scrollHeight + "px";
    line.style.height =
      (window.innerWidth > 768 ? 24 : 16) + description.scrollHeight + "px";
  }
  header.addEventListener("click", () => {
    document.querySelectorAll(".how-it-work__step").forEach((otherStep) => {
      if (otherStep !== step) {
        otherStep.classList.remove("how-it-work__step--active");
        const otherDescription = otherStep.querySelector(
          ".how-it-work__step-description"
        );
        const otherLine = otherStep.querySelector(".how-it-work__step-line");
        if (otherDescription && otherLine) {
          otherDescription.style.maxHeight = "0";
          otherLine.style.height = window.innerWidth > 768 ? "24px" : "16px";
        }
      }
    });

    const isOpen = step.classList.toggle("how-it-work__step--active");
    const defaultHeight = window.innerWidth > 768 ? 24 : 16;

    if (isOpen) {
      description.style.maxHeight = description.scrollHeight + "px";
      line.style.height = defaultHeight + description.scrollHeight + "px";
    } else {
      description.style.maxHeight = "0";
      line.style.height = defaultHeight + "px";
    }
  });
});

//Date Input

const dateInput = document.getElementById("date-input");
const dateIcon = document.getElementById("date-icon");

dateIcon.addEventListener("click", () => {
  dateInput.showPicker();
});

dateInput.addEventListener("input", function () {
  if (dateInput.value) {
    dateInput.classList.add("filled");
  } else {
    dateInput.classList.remove("filled");
  }
});
