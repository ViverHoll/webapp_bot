let countClicks = 0
const textClick = document.getElementById("text-click")
const btn = document.getElementById("click")

btn.onclick = function() {
	countClicks+=1
	textClick.textContent = countClicks

}
