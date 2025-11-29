/**
 * Language Toggle Functionality
 */

function setLanguage(lang) {
  // Store language preference
  localStorage.setItem("guurti_language", lang)

  // Update active button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  // Assuming event is defined elsewhere in the code
  if (typeof window.event !== "undefined") {
    window.event.target.classList.add("active")
  }

  // If using Polylang or WPML, redirect to translated page
  if (typeof window.pll_the_languages !== "undefined") {
    // Polylang integration
    const langUrls = window.pll_the_languages
    if (langUrls[lang]) {
      window.location.href = langUrls[lang]
    }
  } else if (typeof window.icl_lang !== "undefined") {
    // WPML integration
    const currentUrl = window.location.href
    const newUrl = currentUrl.replace(/\/[a-z]{2}\//, "/" + lang + "/")
    window.location.href = newUrl
  } else {
    // Manual implementation - reload with language parameter
    const url = new URL(window.location)
    url.searchParams.set("lang", lang)
    window.location.href = url.toString()
  }
}

// Set RTL direction for Arabic
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("guurti_language")
  if (savedLang === "ar") {
    document.body.setAttribute("dir", "rtl")
  }
})
