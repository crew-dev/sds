document.querySelectorAll('.tooltip-container').forEach(function (container) {
	const tooltip = container.querySelector('.tooltip')
	const tooltipIcon = container.querySelector('.tooltip-icon')
	const tooltipImage = container.querySelector('.tooltip-image')

	tooltipIcon.addEventListener('mouseover', function () {
		tooltip.style.display = 'block'
		tooltipImage.style.display = 'block'
	})

	tooltipIcon.addEventListener('mouseout', function (event) {
		if (!tooltip.contains(event.relatedTarget) && !tooltipImage.contains(event.relatedTarget)) {
			tooltip.style.display = 'none'
			tooltipImage.style.display = 'none'
		}
	})

	tooltip.addEventListener('mouseover', function () {
		tooltip.style.display = 'block'
		tooltipImage.style.display = 'block'
	})

	tooltip.addEventListener('mouseout', function (event) {
		if (!tooltipIcon.contains(event.relatedTarget) && !tooltipImage.contains(event.relatedTarget)) {
			tooltip.style.display = 'none'
			tooltipImage.style.display = 'none'
		}
	})

	tooltipImage.addEventListener('mouseover', function () {
		tooltip.style.display = 'block'
		tooltipImage.style.display = 'block'
	})

	tooltipImage.addEventListener('mouseout', function (event) {
		if (!tooltipIcon.contains(event.relatedTarget) && !tooltip.contains(event.relatedTarget)) {
			tooltip.style.display = 'none'
			tooltipImage.style.display = 'none'
		}
	})
})
