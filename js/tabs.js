document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab')
	const content = document.getElementById('content')

	const categories = {
		zhk: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>',
				button:
					'<button class="card-btn">Показать полностью</button>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
		soc: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>',
				button:
					'<button class="card-btn">Показать полностью</button>'
				// 
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
		provider: [

			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>',
				button:
					'<button class="card-btn">Показать полностью</button>'
				// 
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
		// 
		industrial: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
		// 
		admin: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
		plochadki: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>'
				// 
			},
		],
	}

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(t => t.classList.remove('active'))
			tab.classList.add('active')

			const category = tab.getAttribute('data-category')
			const items = categories[category]

			content.innerHTML = items.map(item => `
			<div class="card">
					<div class="card-content">
							<h3>${item.title}</h3>
							<img src="${item.image2}" class="card-line">
							<div class="card-group-wrap">
								<div class="card-group">
									<div class="card-description">${item.description}</div>
								</div>
							</div>
							<button>${item.button}</button>
					</div>
			</div>
	`).join('')
		})
	})

	tabs[0].click()
})
