/**
 * Accessibility Features
 */

;(() => {
  // Font size adjustment
  let fontSize = Number.parseInt(localStorage.getItem("guurti_font_size")) || 16

  function setFontSize(size) {
    fontSize = Math.max(12, Math.min(24, size))
    document.documentElement.style.fontSize = fontSize + "px"
    localStorage.setItem("guurti_font_size", fontSize)
  }

  // Apply saved font size
  if (fontSize !== 16) {
    setFontSize(fontSize)
  }

  // High contrast mode
  const highContrast = localStorage.getItem("guurti_high_contrast") === "true"
  if (highContrast) {
    document.body.classList.add("high-contrast")
  }

  function toggleHighContrast() {
    document.body.classList.toggle("high-contrast")
    const isActive = document.body.classList.contains("high-contrast")
    localStorage.setItem("guurti_high_contrast", isActive)
  }

  // Expose functions globally
  window.guurtiAccessibility = {
    increaseFontSize: () => setFontSize(fontSize + 2),
    decreaseFontSize: () => setFontSize(fontSize - 2),
    resetFontSize: () => setFontSize(16),
    toggleHighContrast: toggleHighContrast,
  }

  // Skip link focus fix for webkit
  const skipLink = document.querySelector(".skip-link")
  if (skipLink) {
    skipLink.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.setAttribute("tabindex", "-1")
        target.focus()
      }
    })
  }
})()
