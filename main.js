let labels = document.querySelectorAll("label")
let inputs = document.querySelectorAll("input")

labels.forEach(function (label) {
  let labelText = label.textContent
  let splitLabel = labelText.split("")

  let labelMap = splitLabel.map(function (item) {
    return `<span> ${item} </span>`
  })

  let joinLabel = labelMap.join("")

  label.innerHTML = joinLabel

  let spans = document.querySelectorAll("span")

  spans.forEach(function (span, index) {
    span.style.transitionDelay = index * 50 + "ms"
  })
})
