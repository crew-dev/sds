document.querySelectorAll('.tooltip-container').forEach(function (container) {
	const tooltip = container.querySelector('.tooltip')
	const tooltipIcon = container.querySelector('.tooltip-icon')
	const tooltipImage = container.querySelector('.tooltip-image')

	tooltipIcon.addEventListener('click', function () {
		const isTooltipVisible = tooltip.style.display === 'block'

		// Скрыть или показать tooltip и изображение
		tooltip.style.display = isTooltipVisible ? 'none' : 'block'
		tooltipImage.style.display = isTooltipVisible ? 'none' : 'block'
	})

	// Клик на tooltip не будет скрывать его
	tooltip.addEventListener('click', function () {
		tooltip.style.display = 'block'
		tooltipImage.style.display = 'block'
	})

	// Клик на изображение также не будет скрывать его
	tooltipImage.addEventListener('click', function () {
		tooltip.style.display = 'block'
		tooltipImage.style.display = 'block'
	})

	// Скрытие при клике вне контейнера
	document.addEventListener('click', function (event) {
		if (!container.contains(event.target)) {
			tooltip.style.display = 'none'
			tooltipImage.style.display = 'none'
		}
	})
})