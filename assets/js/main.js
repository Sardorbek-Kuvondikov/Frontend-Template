function navigateTo(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((item) => {
    item.classList.remove("active");
  });

  document.getElementById(sectionId).classList.add("active");
}

const text = document.querySelectorAll(".text>li");
text.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    text.forEach((li) => {
      li.classList.remove("bg-active");
      li.style.transition = "all 0.4s ease";
    });
    if (item.innerText) {
      item.classList.add("bg-active");
    }
  });
});

// Tailwidcss copy CDN
const copyButton = document.querySelector(".js-tailwindcss-cdn");

const codeToCopy = `
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    prefix: "tw-",
  };
</script>
`.trim();

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(codeToCopy).then(
    () => {
      alert("Code copied to clipboard!");
    },
    (err) => {
      alert("Failed to copy code: " + err);
    }
  );
});
