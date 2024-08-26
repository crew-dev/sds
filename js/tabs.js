document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tab')
	const content = document.getElementById('content')

	const categories = {
		zhk: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-10m-100vt-rexant-10700/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-10m-100vt-rexant-10700/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-15m-150vt-rexant-10692/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-15m-150vt-rexant-10692/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0608</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 25м/250Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0601</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 2м/20Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0602</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 4м/40Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0603</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 6м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0604</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 8м/80Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>',
				// 
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>',
				// 
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			},
		],
		soc: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0620</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 15м/225Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0622</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 20м/300Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0623</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 25м/375Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0616</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 2м/30Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0617</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 4м/60Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0618</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 6м/90Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0619</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 8м/120Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0645</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 10м/250Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0646</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 15м/375Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0647</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 20м/500Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0648</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 25м/625Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				// 
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0274</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL16-2, неэкранированный, 16Вт/м, 0.9мм2/140м, бухта 300м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0275</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL16-2CR, экранированный, 16Вт/м, 0.9мм2/140м, бухта 200м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0276</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL24-2, неэкранированный, 24Вт/м, 0.9мм2/130м, бухта 300м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0278</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL24-2CR, экранированный, 24Вт/м, 0.9мм2/130м, бухта 200м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0225</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 1.2мм2/170м, бухта 200м REXANT PRO</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0204</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL16-2CR экранированный, 16Вт/м, 100м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0201</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL16-2CR экранированный, 16Вт/м, 50м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0205</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 100м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0202</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 50м REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				// 
			},
		],
		provider: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0657</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 10м/300Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0658</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 15м/450Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0659</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 20м/600Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0660</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 25м/750Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0649</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 2м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0650</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 3м/90Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0651</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 4м/120Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0652</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 5м/150Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0653</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 6м/180Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0654</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 7м/210Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0655</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 8м/240Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0656</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 9м/270Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0254</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся с УФ-защитой SRL30-2CR UV, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0255</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся с УФ-защитой SRL40-2CR UV, экранированный, 40Вт/м, 1,0мм2/100м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0279</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся SRL30-2CR, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0226</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся SRL30-2CR экранированный, 30Вт/м, 1,2мм2/140м, бухта 200м REXANT PRO</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
		],
		// 
		industrial: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0657</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 10м/300Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0658</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 15м/450Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0659</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 20м/600Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0660</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 25м/750Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0649</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 2м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0650</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 3м/90Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0651</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 4м/120Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0652</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 5м/150Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0653</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 6м/180Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0654</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 7м/210Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0655</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 8м/240Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0656</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 9м/270Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0254</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся с УФ-защитой SRL30-2CR UV, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0255</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся с УФ-защитой SRL40-2CR UV, экранированный, 40Вт/м, 1,0мм2/100м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0279</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся SRL30-2CR, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0226</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся SRL30-2CR экранированный, 30Вт/м, 1,2мм2/140м, бухта 200м REXANT PRO</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
		],
		// 
		admin: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0065</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1080-36/36м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0066</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1500-50/50м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0067</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1920-64/64м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0060</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-210-7/7м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0068</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-2160-72/72м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0069</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-2580-86/86м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0061</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-330-11/11м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0070</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-3450-115/115м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0071</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-3900-130/130м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0062</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-435-14,5/14,5м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0072</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-4500-150/150м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0063</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-660-22/22м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0064</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-885-29,5/29,5м REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			}
		],
		plochadki: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanal-2163/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0606</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 15м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0093</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 60м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0094</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 75м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0095</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 90м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0096</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 105м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0097</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 120м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0098</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 135м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0099</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 150м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0100</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 175м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Артикул: </a><span>51-0092</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/catalog/kabel-kanал-2163/">Кабель греющий для обогрева открытых площадок 20Вт/м, 45м REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			}
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
