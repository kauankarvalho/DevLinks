const button = document.querySelector(".js-button")

function toggleLightMode() {
  const html = document.documentElement
  const avatar = document.querySelector(".js-avatar")

  html.classList.toggle("dark")

  const isLightModeEnabled = html.classList.contains("dark")

  if (isLightModeEnabled) {
    avatar.setAttribute("src", "./src/assets/avatar-light.png")
  } else {
    avatar.setAttribute("src", "./src/assets/avatar-dark.png")
  }
}

button.addEventListener("click", toggleLightMode)
