// Button Click Status
function buttonClickFn(num) {
  num = Number(num);

  const btn = document.querySelector(
    `button[onclick="buttonClickFn('${num}')"]`
  );
  const copiedSpan = btn.querySelector(".js-btn-copy");
  const buttonHTML = btn.outerHTML;

  if (num === 1) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 2) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 3) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 4) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 5) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 6) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
  if (num === 7) {
    navigator.clipboard.writeText(buttonHTML).then(
      () => {
        copiedSpan.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
        setTimeout(() => {
          copiedSpan.innerHTML = `Copy`;
        }, 2000);
      },
      (err) => {
        alert("Failed to copy code: " + err);
      }
    );
  }
}

// Show Code
document.querySelector(".js-show-code").addEventListener("click", (evt) => {
  evt.preventDefault();
  document.querySelector(".js-element-code").classList.toggle("tw-hidden");
});
