document.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(".hero-btn")
	const modal = document.querySelector(".modal")
	const closeButton = document.querySelector(".close-button")

	const closeModal = () => {
		modal.classList.remove("show")
		modal.addEventListener("transitionend", () => {
			if (!modal.classList.contains("show")) {
				modal.style.display = "none"
			}
		}, { once: true })
	}

	buttons.forEach(button => {
		button.addEventListener("click", () => {
			modal.style.display = "flex"
			setTimeout(() => {
				modal.classList.add("show")
			}, 10)
		})
	})

	closeButton.addEventListener("click", closeModal)

	window.addEventListener("click", (event) => {
		if (event.target === modal) {
			closeModal()
		}
	})
})