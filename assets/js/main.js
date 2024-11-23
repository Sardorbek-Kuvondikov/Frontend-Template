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
const tailwindcssCopy = document.querySelector(".js-tailwindcss-cdn");

const codeToCopy = `
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    prefix: "tw-",
  };
</script>
`.trim();

tailwindcssCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(codeToCopy).then(
    () => {
      document.querySelector(".js-tail-copied").classList.remove("tw-hidden");
      document.querySelector(".js-tail-copy-code").classList.add("tw-hidden");
      setTimeout(() => {
        document.querySelector(".js-tail-copied").classList.add("tw-hidden");
        document
          .querySelector(".js-tail-copy-code")
          .classList.remove("tw-hidden");
      }, 2000);
    },
    (err) => {
      alert("Failed to copy code: " + err);
    }
  );
});

// Bootstrap copy CDN
const bootstrapCopy = document.querySelector(".js-bootstrap-cdn");

const codeBootCopy = `
  <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  `.trim();

bootstrapCopy.addEventListener("click", (evt) => {
  evt.preventDefault();
  navigator.clipboard.writeText(codeBootCopy).then(
    () => {
      document.querySelector(".js-boot-copied").classList.remove("tw-hidden");
      document.querySelector(".js-bot-copy-code").classList.add("tw-hidden");
      setTimeout(() => {
        document.querySelector(".js-boot-copied").classList.add("tw-hidden");
        document
          .querySelector(".js-bot-copy-code")
          .classList.remove("tw-hidden");
      }, 2000);
    },
    (err) => {
      alert("Failed to copy code: " + err);
    }
  );
});

// Font Awesome copy CDN
const fontAwesomr = document.querySelector(".js-fontawesome-cdn");

const fontAwesomeCopy = `
  <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css"
    />
  `.trim();

fontAwesomr.addEventListener("click", (evt) => {
  evt.preventDefault();
  navigator.clipboard.writeText(fontAwesomeCopy).then(
    () => {
      document.querySelector(".js-font-copied").classList.remove("tw-hidden");
      document.querySelector(".js-font-copy-code").classList.add("tw-hidden");
      setTimeout(() => {
        document.querySelector(".js-font-copied").classList.add("tw-hidden");
        document
          .querySelector(".js-font-copy-code")
          .classList.remove("tw-hidden");
      }, 2000);
    },
    (err) => {
      alert("Failed to copy code: " + err);
    }
  );
});

// Tailwindcss Config copy CDN
const tailConfig = document.querySelector(".js-tailwindcss-config-cdn");

const tailConfigCopy = `
        boxShadow: {
        custom: "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
        customBlue: "0px 0px 3px 4px rgba(59, 130, 246, 0.4)",
        customGray: "0px 0px 3px 4px rgba(210,210,210,0.4)",
      },
  `.trim();

tailConfig.addEventListener("click", (evt) => {
  evt.preventDefault();
  navigator.clipboard.writeText(tailConfigCopy).then(
    () => {
      document
        .querySelector(".js-tailconfig-copied")
        .classList.remove("tw-hidden");
      document
        .querySelector(".js-tailconfig-copy-code")
        .classList.add("tw-hidden");
      setTimeout(() => {
        document
          .querySelector(".js-tailconfig-copied")
          .classList.add("tw-hidden");
        document
          .querySelector(".js-tailconfig-copy-code")
          .classList.remove("tw-hidden");
      }, 2000);
    },
    (err) => {
      alert("Failed to copy code: " + err);
    }
  );
});
