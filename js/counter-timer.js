const progressCircle = document.querySelector(".autoplay-progress svg")
const progressContent = document.querySelector(".autoplay-progress span")
var swiper = new Swiper(".mySwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 10000,
		disableOnInteraction: false
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty("--progress", 1 - progress)
			progressContent.textContent = `${Math.ceil(time / 1000)}`
		}
	}
})
