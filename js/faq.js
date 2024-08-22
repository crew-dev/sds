document.querySelectorAll('.faq-question').forEach(item => {
	item.addEventListener('click', () => {
		const answer = item.nextElementSibling
		item.classList.toggle('active')

		if (item.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px'
		} else {
			answer.style.maxHeight = '0'
		}
	})
})