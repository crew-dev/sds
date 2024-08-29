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
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-20m-200vt-rexant-10696/">Артикул: </a><span>51-0607</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-20m-200vt-rexant-10696/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 20м/200Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-25m-250vt-rexant-10695/">Артикул: </a><span>51-0608</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-25m-250vt-rexant-10695/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 25м/250Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-2m-20vt-rexant-10691/">Артикул: </a><span>51-0601</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-2m-20vt-rexant-10691/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 2м/20Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-4m-40vt-rexant-10697/">Артикул: </a><span>51-0602</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-4m-40vt-rexant-10697/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 4м/40Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-6m-60vt-rexant-10699/">Артикул: </a><span>51-0603</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-6m-60vt-rexant-10699/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 6м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-8m-80vt-rexant-10698/">Артикул: </a><span>51-0604</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-8m-80vt-rexant-10698/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 8м/80Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-pischevoy-10vt-m-buhta-100m-rexant-13480/">Артикул: </a><span>51-0632</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-pischevoy-10vt-m-buhta-100m-rexant-13480/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>',
				// 
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-10m-100vt-rexant-10700/">Артикул: </a><span>51-0605</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-10htm2-ct-v-trubu-10m-100vt-rexant-10700/">Кабель греющий саморегулирующийся 10HTM2-CT, в трубу, 10м/100Вт REXANT</a><br>',
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
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-10m-150vt-rexant-11997/">Артикул: </a><span>51-0620</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-10m-150vt-rexant-11997/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 10м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-15m-225vt-rexant-12002/">Артикул: </a><span>51-0621</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-15m-225vt-rexant-12002/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 15м/225Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-20m-300vt-rexant-11998/">Артикул: </a><span>51-0622</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-20m-300vt-rexant-11998/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 20м/300Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-25m-375vt-rexant-11999/">Артикул: </a><span>51-0623</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-25m-375vt-rexant-11999/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 25м/375Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-2m-30vt-rexant-12003/">Артикул: </a><span>51-0616</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-2m-30vt-rexant-12003/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 2м/30Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-4m-60vt-rexant-12000//">Артикул: </a><span>51-0617</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-4m-60vt-rexant-12000/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 4м/60Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-6m-90vt-rexant-12004/">Артикул: </a><span>51-0618</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-6m-90vt-rexant-12004/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 6м/90Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-8m-120vt-rexant-12001/">Артикул: </a><span>51-0619</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-15msr-pb-na-trubu-8m-120vt-rexant-12001/">Кабель греющий саморегулирующийся 15MSR-PB, на трубу, 8м/120Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-10m-250vt-rexant-17489/">Артикул: </a><span>51-0645</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-10m-250vt-rexant-17489/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 10м/250Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-15m-375vt-rexant-17484/">Артикул: </a><span>51-0646</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-15m-375vt-rexant-17484/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 15м/375Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-20m-500vt-rexant-17481/">Артикул: </a><span>51-0647</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-20m-500vt-rexant-17481/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 20м/500Вт REXANT</a><br>' +

					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-25m-625vt-rexant-17482/">Артикул: </a><span>51-0648</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-25m-625vt-rexant-17482/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 25м/625Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-2m-50vt-rexant-17490/">Артикул: </a><span>51-0637</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-2m-50vt-rexant-17490/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 2м/50Вт REXANT</a><br>' +

					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-3m-75vt-rexant-17491/">Артикул: </a><span>51-0638</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-3m-75vt-rexant-17491/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 3м/75Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-4m-100vt-rexant-17488/">Артикул: </a><span>51-0639</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-4m-100vt-rexant-17488/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 4м/100Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-5m-125vt-rexant-17487/">Артикул: </a><span>51-0640</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-5m-125vt-rexant-17487/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 5м/125Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-6m-150vt-rexant-17485/">Артикул: </a><span>51-0641</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-6m-150vt-rexant-17485/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 6м/150Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-7m-175vt-rexant-17483/">Артикул: </a><span>51-0642</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-7m-175vt-rexant-17483/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 7м/175Вт REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-8m-200vt-rexant-17486/">Артикул: </a><span>51-0643</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-extra-line-25msr-pb-na-trubu-8m-200vt-rexant-17486/">Кабель греющий саморегулирующийся Extra Line 25MSR-PB, на трубу, 8м/200Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl16-2-neekranirovanniy-16vt-m-0-88mm2-105m-300m-rexant-30975/">Артикул: </a><span>51-0274</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl16-2-neekranirovanniy-16vt-m-0-88mm2-105m-300m-rexant-30975/">Кабель греющий саморегулирующийся SRL16-2, неэкранированный, 16Вт/м, 0.9мм2/140м, бухта 300м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-0-88mm2-105m-200m-rexant-30976/">Артикул: </a><span>51-0275</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-0-88mm2-105m-200m-rexant-30976/">Кабель греющий саморегулирующийся SRL16-2CR, экранированный, 16Вт/м, 0.9мм2/140м, бухта 200м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl24-2-neekranirovanniy-24vt-m-0-88mm2-70m-300m-rexant-30977/">Артикул: </a><span>51-0276</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl24-2-neekranirovanniy-24vt-m-0-88mm2-70m-300m-rexant-30977/">Кабель греющий саморегулирующийся SRL24-2, неэкранированный, 24Вт/м, 0.9мм2/130м, бухта 300м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl24-2cr-ekranirovanniy-24vt-m-0-88mm2-70m-200m-rexant-30978/">Артикул: </a><span>51-0278</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl24-2cr-ekranirovanniy-24vt-m-0-88mm2-70m-200m-rexant-30978/">Кабель греющий саморегулирующийся SRL24-2CR, экранированный, 24Вт/м, 0.9мм2/130м, бухта 200м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl24-2cr-ekranirovanniy-24vt-m-200m-rexant-22335/">Артикул: </a><span>51-0225</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl24-2cr-ekranirovanniy-24vt-m-200m-rexant-22335/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 1.2мм2/170м, бухта 200м REXANT PRO</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'
				// 
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Мини-бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-100m-rexant-20260/">Артикул: </a><span>51-0204</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-100m-rexant-20260/">Кабель греющий саморегулирующийся SRL16-2CR экранированный, 16Вт/м, 100м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-50m-rexant-20239/">Артикул: </a><span>51-0201</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl16-2cr-ekranirovanniy-16vt-m-50m-rexant-20239/">Кабель греющий саморегулирующийся SRL16-2CR экранированный, 16Вт/м, 50м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl-24-2cr-ekranirovanniy-24vt-m-100m-rexant-20251/">Артикул: </a><span>51-0205</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl-24-2cr-ekranirovanniy-24vt-m-100m-rexant-20251/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 100м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl-24-2cr-ekranirovanniy-24vt-m-50m-rexant-20261/">Артикул: </a><span>51-0202</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl-24-2cr-ekranirovanniy-24vt-m-50m-rexant-20261/">Кабель греющий саморегулирующийся SRL24-2CR экранированный, 24Вт/м, 50м REXANT</a><br>',
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
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-10m-300vt-rexant-17576/">Артикул: </a><span>51-0657</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-10m-300vt-rexant-17576/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 10м/300Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-15m-450vt-rexant-17575/">Артикул: </a><span>51-0658</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-15m-450vt-rexant-17575/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 15м/450Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-20m-600vt-rexant-17574/">Артикул: </a><span>51-0659</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-20m-600vt-rexant-17574/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 20м/600Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-25m-750vt-rexant-17571/">Артикул: </a><span>51-0660</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-25m-750vt-rexant-17571/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 25м/750Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-2m-60vt-rexant-17565/">Артикул: </a><span>51-0649</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-2m-60vt-rexant-17565/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 2м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-3m-90vt-rexant-17570/">Артикул: </a><span>51-0650</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-3m-90vt-rexant-17570/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 3м/90Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-4m-120vt-rexant-17566/">Артикул: </a><span>51-0651</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-4m-120vt-rexant-17566/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 4м/120Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-5m-150vt-rexant-17572/">Артикул: </a><span>51-0652</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-5m-150vt-rexant-17572/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 5м/150Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-6m-180vt-rexant-17568/">Артикул: </a><span>51-0653</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-6m-180vt-rexant-17568/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 6м/180Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-7m-210vt-rexant-17573/">Артикул: </a><span>51-0654</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-7m-210vt-rexant-17573/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 7м/210Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-8m-240vt-rexant-17569/">Артикул: </a><span>51-0655</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-8m-240vt-rexant-17569/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 8м/240Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-9m-270vt-rexant-17567/">Артикул: </a><span>51-0656</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-9m-270vt-rexant-17567/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 9м/270Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-30kns-2lp-el-65-85-30vt-m-uv-200m-ekranirovanniy-rexant-28752/">Артикул: </a><span>51-0254</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-30kns-2lp-el-65-85-30vt-m-uv-200m-ekranirovanniy-rexant-28752/">Кабель греющий саморегулирующийся с УФ-защитой SRL30-2CR UV, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-40kns-2lp-el-65-85-40vt-m-uv-200m-ekranirovanniy-rexant-28753/">Артикул: </a><span>51-0255</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-40kns-2lp-el-65-85-40vt-m-uv-200m-ekranirovanniy-rexant-28753/">Кабель греющий саморегулирующийся с УФ-защитой SRL40-2CR UV, экранированный, 40Вт/м, 1,0мм2/100м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-0-88mm2-55m-200m-rexant-30980/">Артикул: </a><span>51-0279</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-0-88mm2-55m-200m-rexant-30980/">Кабель греющий саморегулирующийся SRL30-2CR, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-200m-rexant-22336/">Артикул: </a><span>51-0226</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-200m-rexant-22336/">Кабель греющий саморегулирующийся SRL30-2CR экранированный, 30Вт/м, 1,2мм2/140м, бухта 200м REXANT PRO</a><br>',
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
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-10m-300vt-rexant-17576/">Артикул: </a><span>51-0657</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-10m-300vt-rexant-17576/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 10м/300Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-15m-450vt-rexant-17575/">Артикул: </a><span>51-0658</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-15m-450vt-rexant-17575/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 15м/450Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-20m-600vt-rexant-17574/">Артикул: </a><span>51-0659</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-20m-600vt-rexant-17574/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 20м/600Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-25m-750vt-rexant-17571/">Артикул: </a><span>51-0660</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-25m-750vt-rexant-17571/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 25м/750Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-2m-60vt-rexant-17565/">Артикул: </a><span>51-0649</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-2m-60vt-rexant-17565/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 2м/60Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-3m-90vt-rexant-17570/">Артикул: </a><span>51-0650</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-3m-90vt-rexant-17570/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 3м/90Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-4m-120vt-rexant-17566/">Артикул: </a><span>51-0651</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-4m-120vt-rexant-17566/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 4м/120Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-5m-150vt-rexant-17572/">Артикул: </a><span>51-0652</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-5m-150vt-rexant-17572/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 5м/150Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-6m-180vt-rexant-17568/">Артикул: </a><span>51-0653</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-6m-180vt-rexant-17568/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 6м/180Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-7m-210vt-rexant-17573/">Артикул: </a><span>51-0654</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-7m-210vt-rexant-17573/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 7м/210Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-8m-240vt-rexant-17569/">Артикул: </a><span>51-0655</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-8m-240vt-rexant-17569/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 8м/240Вт REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-9m-270vt-rexant-17567/">Артикул: </a><span>51-0656</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-power-line-30srl-2cr-9m-270vt-rexant-17567/">Кабель греющий саморегулирующийся POWER Line 30SRL-2CR, 9м/270Вт REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

				//
			},
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Бухты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-30kns-2lp-el-65-85-30vt-m-uv-200m-ekranirovanniy-rexant-28752/">Артикул: </a><span>51-0254</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-30kns-2lp-el-65-85-30vt-m-uv-200m-ekranirovanniy-rexant-28752/">Кабель греющий саморегулирующийся с УФ-защитой SRL30-2CR UV, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-40kns-2lp-el-65-85-40vt-m-uv-200m-ekranirovanniy-rexant-28753/">Артикул: </a><span>51-0255</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-dlya-trub-vodostokov-krish-40kns-2lp-el-65-85-40vt-m-uv-200m-ekranirovanniy-rexant-28753/">Кабель греющий саморегулирующийся с УФ-защитой SRL40-2CR UV, экранированный, 40Вт/м, 1,0мм2/100м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-0-88mm2-55m-200m-rexant-30980/">Артикул: </a><span>51-0279</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-nagrevatelniy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-0-88mm2-55m-200m-rexant-30980/">Кабель греющий саморегулирующийся SRL30-2CR, экранированный, 30Вт/м, 1,0мм2/110м, бухта 200м REXANT</a><br>' +
					//
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-200m-rexant-22336/">Артикул: </a><span>51-0226</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-samoreguliruyuschiysya-srl30-2cr-ekranirovanniy-30vt-m-200m-rexant-22336/">Кабель греющий саморегулирующийся SRL30-2CR экранированный, 30Вт/м, 1,2мм2/140м, бухта 200м REXANT PRO</a><br>',
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
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1080-36-36m-rexant-28601/">Артикул: </a><span>51-0065</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1080-36-36m-rexant-28601/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1080-36/36м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1500-50-50m-rexant-28602/">Артикул: </a><span>51-0066</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1500-50-50m-rexant-28602/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1500-50/50м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1920-64-64m-rexant-28603/">Артикул: </a><span>51-0067</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-1920-64-64m-rexant-28603/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-1920-64/64м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-210-7-7m-rexant-28609/">Артикул: </a><span>51-0060</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-210-7-7m-rexant-28609/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-210-7/7м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-2160-72-72m-rexant-28604/">Артикул: </a><span>51-0068</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-2160-72-72m-rexant-28604/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-2160-72/72м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-2580-86-86m-rexant-28605/">Артикул: </a><span>51-0069</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-2580-86-86m-rexant-28605/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-2580-86/86м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-330-11-11m-rexant-28610/">Артикул: </a><span>51-0061</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-330-11-11m-rexant-28610/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-330-11/11м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-3450-115-115m-rexant-28606/">Артикул: </a><span>51-0070</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-3450-115-115m-rexant-28606/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-3450-115/115м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-3900-130-130m-rexant-28607/">Артикул: </a><span>51-0071</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-3900-130-130m-rexant-28607/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-3900-130/130м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-435-14-5-14-5m-rexant-28611/">Артикул: </a><span>51-0062</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-435-14-5-14-5m-rexant-28611/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-435-14,5/14,5м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-4500-150-150m-rexant-28608/">Артикул: </a><span>51-0072</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-4500-150-150m-rexant-28608/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-4500-150/150м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-660-22-22m-rexant-28599/">Артикул: </a><span>51-0063</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-660-22-22m-rexant-28599/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-660-22/22м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-885-29-5-29-5m-rexant-28600/">Артикул: </a><span>51-0064</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-obogreva-krovli-vodostokov-ploschadok-stupeney-grk-30-885-29-5-29-5m-rexant-28600/">Кабель греющий для обогрева кровли, водостоков, площадок, ступеней ГРК-30-885-29,5/29,5м REXANT</a><br>',
				button:
					'<button data-fancybox="gallery" href="img/scheme.png" class="card-btn">Показать схему</a>'

			}
		],
		plochadki: [
			{
				title: '<a target="_blank" href="https://www.sds-group.ru/catalog/elektrotehnika-2341/">Комплекты</a>',
				image2: '../img/line-card.svg',
				description:
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-60m-rexant-29313/">Артикул: </a><span>51-0093</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-60m-rexant-29313/">Кабель греющий для обогрева открытых площадок 20Вт/м, 60м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-75m-rexant-29314/">Артикул: </a><span>51-0094</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-75m-rexant-29314/">Кабель греющий для обогрева открытых площадок 20Вт/м, 75м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-90m-rexant-29315/">Артикул: </a><span>51-0095</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-90m-rexant-29315/">Кабель греющий для обогрева открытых площадок 20Вт/м, 90м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-105m-rexant-29316/">Артикул: </a><span>51-0096</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-105m-rexant-29316/">Кабель греющий для обогрева открытых площадок 20Вт/м, 105м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-120m-rexant-29317/">Артикул: </a><span>51-0097</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-120m-rexant-29317/">Кабель греющий для обогрева открытых площадок 20Вт/м, 120м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-135m-rexant-29311/">Артикул: </a><span>51-0098</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-135m-rexant-29311/">Кабель греющий для обогрева открытых площадок 20Вт/м, 135м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-150m-rexant-29310/">Артикул: </a><span>51-0099</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-150m-rexant-29310/">Кабель греющий для обогрева открытых площадок 20Вт/м, 150м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-175m-rexant-29306/">Артикул: </a><span>51-0100</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-175m-rexant-29306/">Кабель греющий для обогрева открытых площадок 20Вт/м, 175м REXANT</a><br>' +
					// 
					'<li target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-45m-rexant-29312/">Артикул: </a><span>51-0092</span><br>' +
					'<a target="_blank" href="https://www.sds-group.ru/product/kabel-greyuschiy-dlya-progreva-betona-20vt-m-45m-rexant-29312/">Кабель греющий для обогрева открытых площадок 20Вт/м, 45м REXANT</a><br>',
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
