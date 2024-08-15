// function loadScript(url, goal, callback) {
// 	// Adding the script tag to the head
// 	const script = document.createElement('script');
// 	script.type = 'application/javascript';
// 	script.src = url;
// 	script.setAttribute('data-goal', goal);

// 	// Then bind the event to the callback function.
// 	// There are several events for cross browser compatibility.
// 	script.onreadystatechange = callback;
// 	script.onload = callback;

// 	// Fire the loading
// 	document.body.appendChild(script);
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	loadScript(
// 		'https://a.exoclick.com/tag_gen.js',
// 		'65ff6501324ae112a110240def3185a5',
// 		() => console.log('view loaded')
// 	);
// });
