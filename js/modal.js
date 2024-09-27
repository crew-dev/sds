document.addEventListener("DOMContentLoaded", function () {
	const closeButton = document.querySelector("#closeButton")
	closeButton.addEventListener("click", function () {
		$.fancybox.close()
	})
})