function navigateTo(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((item) => {
    item.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
}
