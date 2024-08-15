(function () {
	const resizeBody = () =>
		(document.body.style.height = window.innerHeight + 'px');

	resizeBody();
	window.addEventListener('resize', () => resizeBody());
})();
