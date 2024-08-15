document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const currentlyVisible = answer.style.display === "block";

      // Hide all answers
      document
        .querySelectorAll(".answer")
        .forEach((a) => (a.style.display = "none"));

      // Toggle the clicked answer
      answer.style.display = currentlyVisible ? "none" : "block";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".policy-title");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const currentlyVisible = content.style.display === "block";

      // Hide all contents
      document
        .querySelectorAll(".policy-content")
        .forEach((c) => (c.style.display = "none"));

      // Toggle the clicked content
      content.style.display = currentlyVisible ? "none" : "block";
    });
  });
});
