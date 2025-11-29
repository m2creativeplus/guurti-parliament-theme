/**
 * Navigation Enhancement
 */

;(() => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const mainNav = document.querySelector(".main-navigation")

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("toggled")
      this.setAttribute("aria-expanded", this.getAttribute("aria-expanded") === "false" ? "true" : "false")
    })
  }

  // Dropdown menu keyboard accessibility
  const dropdownToggles = document.querySelectorAll(".main-navigation .menu-item-has-children > a")

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("focus", function () {
      this.parentElement.classList.add("focus")
    })

    toggle.addEventListener("blur", function () {
      this.parentElement.classList.remove("focus")
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".main-navigation")) {
      document
        .querySelectorAll(".main-navigation .menu-item-has-children")
        .forEach((item) => item.classList.remove("focus"))
    }
  })
})()
