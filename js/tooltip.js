let currentOpenTooltip = null // Хранит текущий открытый тултип
let currentOpenImage = null   // Хранит текущее открытое изображение (кроме cloud-zoom)

document.querySelectorAll('.tooltip-container').forEach(function (container) {
	const tooltip = container.querySelector('.tooltip')
	const tooltipIcon = container.querySelector('.tooltip-icon')
	const tooltipImage = container.querySelector('.tooltip-image')
	const zoomLink = container.querySelector('a.cloud-zoom') // зум-ссылка

	// Обработчик клика на иконку (только для показа/скрытия тултипа)
	tooltipIcon.addEventListener('click', function (event) {
		const isTooltipVisible = window.getComputedStyle(tooltip).display === 'block'

		// Если открыт другой тултип, скрываем его и его изображение (если оно не относится к cloud-zoom)
		if (currentOpenTooltip && currentOpenTooltip !== tooltip) {
			currentOpenTooltip.style.display = 'none'
			if (currentOpenImage) {
				currentOpenImage.style.display = 'none'
				currentOpenImage = null // Сбрасываем текущее изображение
			}
		}

		// Показываем или скрываем текущий тултип
		tooltip.style.display = isTooltipVisible ? 'none' : 'block'

		// Если есть изображение, а не зум-ссылка
		if (tooltipImage) {
			tooltipImage.style.display = isTooltipVisible ? 'none' : 'block'

			// Обновляем текущее изображение, если оно не относится к зум-ссылке
			if (!zoomLink) {
				currentOpenImage = tooltipImage.style.display === 'block' ? tooltipImage : null
			}
		}

		// Обновляем текущий открытый тултип
		currentOpenTooltip = tooltip.style.display === 'block' ? tooltip : null

		event.stopPropagation() // Останавливаем всплытие
	})

	// Клик на тултип не закрывает его
	tooltip.addEventListener('click', function (event) {
		event.stopPropagation()
	})

	// Клик на изображение также не закрывает тултип (если есть изображение)
	if (tooltipImage) {
		tooltipImage.addEventListener('click', function (event) {
			event.stopPropagation()
		})
	}

	// Клик по зум-ссылке работает отдельно и не управляет тултипом
	if (zoomLink) {
		zoomLink.addEventListener('click', function (event) {
			// Зум-ссылка работает как обычно, тултип не скрывается
			event.stopPropagation() // Предотвращаем закрытие тултипа
		})
	}

	// Скрытие тултипа при клике вне контейнера
	document.addEventListener('click', function (event) {
		if (!container.contains(event.target)) {
			tooltip.style.display = 'none'
			if (tooltipImage) {
				tooltipImage.style.display = 'none'
			}

			// Сбрасываем текущий открытый тултип и изображение
			if (currentOpenTooltip === tooltip) {
				currentOpenTooltip = null
			}
			if (currentOpenImage === tooltipImage) {
				currentOpenImage = null
			}
		}
	})
})
