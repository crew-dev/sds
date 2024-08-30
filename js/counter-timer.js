var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	loop: true, // Добавили loop
	navigation: {
		nextEl: '.custom-next', // Используем кастомную стрелку
		prevEl: ".custom-prev"
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty("--progress", 1 - progress)
			progressContent.textContent = `${Math.ceil(time / 1000)}`
		}
	}
})