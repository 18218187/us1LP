const trackEverything = (preventTracking = false) => {
	const url = new URL(window.location.href);

	if (url.searchParams.has('binom') && url.searchParams.get('binom') === 'true') {
		const formTracking = document.querySelectorAll('.form--tracking');

		formTracking.forEach((form) => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();

				window.location.href = 'https://t.b1-dating.com/click?lp=1';
			});
		});
	} else if (url.searchParams.has('cpv') && url.searchParams.get('cpv') === 'true') {
		let prelandingID = 1;

		if (url.searchParams.has('prelanding_id')) {
			prelandingID = url.searchParams.get('prelanding_id');
		}

		// Create hidden input element
		var hiddenInput = document.createElement('input');
		hiddenInput.type = 'hidden';
		hiddenInput.id = 'hidLocation';
		hiddenInput.value = 'https://t2.l6-dating.com/';

		// Create script element for clpconfig
		var clpconfigScript = document.createElement('script');
		clpconfigScript.type = 'text/javascript';
		clpconfigScript.textContent = 'var clpconfig = {};';

		// Create script element for the landing.js file
		var landingScript = document.createElement('script');
		landingScript.type = 'text/javascript';
		landingScript.src = 'https://t2.l6-dating.com/landing.js';

		// Create script element for checkdirect function call
		var checkdirectScript = document.createElement('script');
		checkdirectScript.type = 'text/javascript';
		checkdirectScript.textContent = `checkdirect(10, ${prelandingID});`;

		// Append elements to the body before the closing </body> tag
		document.body.appendChild(hiddenInput);
		document.body.appendChild(clpconfigScript);
		document.body.appendChild(landingScript);

		setTimeout(() => {
			document.body.appendChild(checkdirectScript);
		}, 500);

		const formTracking = document.querySelectorAll('.form--tracking');

		formTracking.forEach((form) => {
			form.addEventListener('submit', (e) => {
				e.preventDefault();

				window.location.href = 'https://t2.l6-dating.com/base2.php';
			});
		});
	} else {
		const trackingTag = 'l6';

		const createMetaTag = (httpEquiv, content) => {
			const metaTag = document.createElement('meta');
			metaTag.setAttribute('http-equiv', httpEquiv);
			metaTag.setAttribute('content', content);
			document.head.appendChild(metaTag);
		};

		// Meta tag for content security policy
		createMetaTag('content-security-policy', 'upgrade-insecure-requests');

		// Meta tag for tracking
		createMetaTag(
			'delegate-ch',
			`sec-ch-ua https://t.${trackingTag}-dating.com; sec-ch-ua-mobile https://t.${trackingTag}-dating.com; sec-ch-ua-arch https://t.${trackingTag}-dating.com; sec-ch-ua-model https://t.${trackingTag}-dating.com; sec-ch-ua-platform https://t.${trackingTag}-dating.com; sec-ch-ua-platform-version https://t.${trackingTag}-dating.com; sec-ch-ua-bitness https://t.${trackingTag}-dating.com; sec-ch-ua-full-version-list https://t.${trackingTag}-dating.com; sec-ch-ua-full-version https://t.${trackingTag}-dating.com`
		);

		// Meta tag for trafficjunky
		createMetaTag(
			'delegate-ch',
			`sec-ch-ua https://ads.trafficjunky.net; sec-ch-ua-arch https://ads.trafficjunky.net; sec-ch-ua-full-version-list https://ads.trafficjunky.net; sec-ch-ua-mobile https://ads.trafficjunky.net; sec-ch-ua-model https://ads.trafficjunky.net; sec-ch-ua-platform https://ads.trafficjunky.net; sec-ch-ua-platform-version https://ads.trafficjunky.net;`
		);

		var _mpevt = _mpevt || [];
		(function () {
			var u =
				'https:' == document.location.protocol
					? 'https://static.trafficjunky.com/js/mp.min.js'
					: 'http://static.trafficjunky.com/js/mp.min.js';
			var d = document,
				g = d.createElement('script'),
				s = d.getElementsByTagName('script')[0];
			g.type = 'text/javascript';
			g.defer = true;
			g.async = true;
			g.src = u;
			s.parentNode.insertBefore(g, s);
		})();

		_mpevt.push(['Mydirtyhookup._event', 'Viewsite', '1', '7']);

		(function (b, c, l, q, r, e, t, y, d, m, u, z, a, n, g, f, p, v, h, w) {
			function x() {
				for (var a = c.querySelectorAll('.dtpcnt'), b = 0, d = a.length; b < d; b++)
					a[b][t] = a[b][t].replace(/(^|\s+)dtpcnt($|\s+)/g, '');
			}
			w = 'https:' === b.location.protocol ? 'secure; ' : '';
			b[d] ||
				((b[d] = function () {
					(b[d].q = b[d].q || []).push(arguments);
				}),
				(g = c[q]),
				(c[q] = function () {
					g && g.apply(this, arguments);
					if (
						b[d] &&
						!b[d].hasOwnProperty('params') &&
						/loaded|interactive|complete/.test(c.readyState)
					)
						for (; (a = c[r][m++]); )
							/\/?click\/?($|(\/[0-9]+)?$)/.test(a.pathname) &&
								(a[e] =
									'javascrip' +
									b.postMessage.toString().slice(4, 5) +
									':' +
									d +
									'.l="' +
									a[e] +
									'",void 0');
				}),
				setTimeout(function () {
					(p = /[?&]cpid(=([^&#]*)|&|#|$)/.exec(b.location.href)) &&
						p[2] &&
						((f = p[2]), (v = c.cookie.match(new RegExp('(^| )vl-' + f + '=([^;]+)'))));
					var d = c.cookie.match(/(^| )vl-cep=([^;]+)/),
						k = location[e];
					if (
						'savedCep' === z &&
						d &&
						(!f || 'undefined' === typeof f) &&
						0 > k.indexOf('cep=')
					) {
						var g = -1 < k.indexOf('?') ? '&' : '?';
						k += g + d.pop();
					}
					a = c.createElement('script');
					n = c.scripts[0];
					a.defer = 1;
					a.src =
						u +
						(-1 === u.indexOf('?') ? '?' : '&') +
						'lpref=' +
						l(c.referrer) +
						'&lpurl=' +
						l(k) +
						'&lpt=' +
						l(c.title) +
						'&vtm=' +
						new Date().getTime() +
						(v ? '&uw=no' : '');
					a[y] = function () {
						for (m = 0; (a = c[r][m++]); )
							/dtpCallback\.l/.test(a[e]) &&
								(a[e] = decodeURIComponent(a[e]).match(
									/dtpCallback\.l="([^"]+)/
								)[1]);
						x();
					};
					n.parentNode.insertBefore(a, n);
					f &&
						((h = new Date()),
						h.setTime(h.getTime() + 864e5),
						(c.cookie =
							'vl-' +
							f +
							'=1; ' +
							w +
							'samesite=Strict; expires=' +
							h.toGMTString() +
							'; path=/'));
				}, 0),
				setTimeout(x, 7e3));
		})(
			window,
			document,
			encodeURIComponent,
			'onreadystatechange',
			'links',
			'href',
			'className',
			'onerror',
			'dtpCallback',
			0,
			`https://t.${trackingTag}-dating.com/d/.js`,
			'savedCep'
		);

		const dtpcnt = document.querySelector('.dtpcnt');

		if (dtpcnt) {
			dtpcnt.style.opacity = '0';
		}

		// Track views & conversions

		var URLToArray = function (url) {
			var request = {};
			var pairs = url.substring(url.indexOf('?') + 1).split('&');
			for (var i = 0; i < pairs.length; i++) {
				if (!pairs[i]) {
					continue;
				}

				var pair = pairs[i].split('=');
				request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
			}

			return request;
		};

		var trackConversion = function (goal, redirectUrl) {
			var imgTag = document.createElement('img');
			imgTag.height = 1;
			imgTag.width = 1;
			imgTag.style = 'border-style: none;display:none;';
			imgTag.alt = '';
			imgTag.src = `http://syndication.exoclick.com/tag.php?goal=${goal}&tag=${conversionTracking}`;
			document.body.appendChild(imgTag);

			if (typeof redirectUrl !== 'undefined') {
				setTimeout(function () {
					window.location = redirectUrl;
				}, 100);
			}
		};

		var currentUrl = window.location.href;
		var conversionTracking = '';
		if (currentUrl.indexOf('?') !== -1) {
			var urlParts = currentUrl.split('?', 2);
			var parameters = URLToArray(urlParts[1]);

			if (typeof parameters.tag === 'string' || parameters.tag instanceof String) {
				conversionTracking = parameters.tag;
			}
		}

		const viewTag = '61603780b437fb53aceb2563ccce02a4';
		const funnelTag = '4b3bf62bcd372d2d49f004e56c39b064';
		const age30Tag = '5f39f11c67fafaf93fa1da9591f3a4ea';

		if (!preventTracking) {
			trackConversion(viewTag); //We track view right away
		}

		function ppp(url) {
			trackConversion(funnelTag, url); // Track and redirect on click
		}

		// Track age

		const btnAgeAll = document.querySelectorAll('.btn--age');

		btnAgeAll.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (btn.dataset.age === '30-34' || btn.dataset.age === '35-plus') {
					trackConversion(age30Tag);
				}
			});
		});

		// Track everything and redirect

		try {
			// get params
			const queryString = window.location.search;
			const urlParams = new URLSearchParams(queryString);

			// turn this into object

			const entries = urlParams.entries();

			// dynamically create hidden inputs
			// with key/value pairs from search params

			const formTracking = document.querySelectorAll('.form--tracking');

			const exceptions = ['lang', 'ctg', 'v', 'loader', 'pn', 'slider'];

			let trackAge = false;
			let vcpid1 = '';
			let vcpid2 = '';

			for (const [key, value] of entries) {
				if (key === 'vcpid1') {
					vcpid1 = value;
				} else if (key === 'vcpid2') {
					vcpid2 = value;
				} else {
					if (key === 'age') {
						trackAge = true;
					}

					if (!exceptions.includes(key)) {
						const input = document.createElement('input');
						input.type = 'hidden';
						input.classList.add(key);
						input.name = key;
						input.value = value;
						formTracking.forEach((form) => form.appendChild(input));
					}
				}
			}

			if (trackAge) {
				document.querySelectorAll('.btn--age').forEach((btn) => {
					btn.addEventListener('click', () => {
						document.querySelector('.age').value = btn.dataset.age;
					});
				});
			}

			const TRACKING_URL = 'https://t.l6-dating.com/';

			formTracking.forEach((form) => {
				form.addEventListener('submit', function (e) {
					e.preventDefault();

					_mpevt.push(['Mydirtyhookup._event', 'Funnelcompleted', '1', '10080']);

					var formData = new FormData(this);
					var serializedFormData = decodeURIComponent(
						new URLSearchParams(formData).toString()
					);

					if (formData.get('hoi') && formData.get('hoi') === 'true') {
						const chosenAge = formData.get('age');

						let fullUrl;

						if (chosenAge === '18-24' || chosenAge === '25-29') {
							fullUrl = TRACKING_URL + 'click/2';
						}

						if (chosenAge === '30-34' || chosenAge === '35-plus') {
							fullUrl = TRACKING_URL + 'click/1';
						}

						ppp(fullUrl);

						return;
					}

					var fullUrl =
						vcpid1 && vcpid2
							? TRACKING_URL + vcpid1 + '?' + serializedFormData
							: TRACKING_URL + 'click/1';
					var fullUrl2 =
						vcpid2 && vcpid2
							? TRACKING_URL + vcpid2 + '?' + serializedFormData
							: TRACKING_URL + 'click/2';

					window.open(fullUrl);
					ppp(fullUrl2);
				});
			});
		} catch (err) {
			console.error(err);
		}
	}
};

trackEverything();
