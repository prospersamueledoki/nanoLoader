const loaders = {
  "nl-circle": { cls: "lds-circle", html: "<div></div>" },
  "nl-default": { cls: "lds-default", html: "<div></div>".repeat(12) },
  "nl-dual-ring": { cls: "lds-dual-ring", html: "" },
  "nl-ellipsis": { cls: "lds-ellipsis", html: "<div></div>".repeat(4) },
  "nl-facebook": { cls: "lds-facebook", html: "<div></div>".repeat(3) },
  "nl-heart": { cls: "lds-heart", html: "<div></div>" },
  "nl-hourglass": { cls: "lds-hourglass", html: "" },
  "nl-ring": { cls: "lds-ring", html: "<div></div>".repeat(4) },
  "nl-ripple": { cls: "lds-ripple", html: "<div></div>".repeat(2) },
  "nl-roller": { cls: "lds-roller", html: "<div></div>".repeat(8) },
  "nl-spinner": { cls: "lds-spinner", html: "<div></div>".repeat(12) },

  // 🆕 New loaders
  "nl-bars": { cls: "lds-bars", html: "<div></div><div></div><div></div><div></div>" },
  "nl-pulse": { cls: "lds-pulse", html: "<div></div>" },
  "nl-wave": { cls: "lds-wave", html: "<div></div><div></div><div></div><div></div><div></div>" },
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nanoLoader").forEach(loader => {
    Object.keys(loaders).forEach(type => {
      if (loader.classList.contains(type)) {
        loader.classList.add(loaders[type].cls);
        loader.innerHTML = loaders[type].html;
      }
    });

    // 🎨 Color system (via HTML class)
    loader.classList.forEach(c => {
      if (c.startsWith("nl-color-")) {
        const colorName = c.replace("nl-color-", "");
        loader.style.color = colorName;
      }
    });
  });
});
