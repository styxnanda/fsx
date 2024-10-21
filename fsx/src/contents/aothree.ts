import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://archiveofourown.org/works/*/chapters/*"]
}

window.addEventListener("load", () => {
  console.log("content script for AO3 loaded")

  document.getElementById("outer").style.background = "#c11e1e"
})
