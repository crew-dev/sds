document.querySelectorAll('.tooltip-container').forEach(function (container) {
	const tooltip = container.querySelector('.tooltip')
	const tooltipIcon = container.querySelector('.tooltip-icon')

	tooltipIcon.addEventListener('mouseover', function () {
		tooltip.style.display = 'block'
	})

	tooltipIcon.addEventListener('mouseout', function (event) {
		if (!tooltip.contains(event.relatedTarget)) {
			tooltip.style.display = 'none'
		}
	})

	tooltip.addEventListener('mouseover', function () {
		tooltip.style.display = 'block'
	})

	tooltip.addEventListener('mouseout', function (event) {
		if (!tooltipIcon.contains(event.relatedTarget)) {
			tooltip.style.display = 'none'
		}
	})
})
