(() => {
	const backTop = document
				.getElementsByClassName('js-cd-top')[0],
		offset = 300,
		offsetOpacity = 1200,
		scrollDuration = 70;
	let scrolling = false;

	if( backTop ) {
		window.addEventListener("scroll", function() {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame)
					? setTimeout(checkBackToTop, 250)
					: window.requestAnimationFrame(checkBackToTop);
			}
		});

		backTop.addEventListener('click', event => {
			event.preventDefault();
			(!window.requestAnimationFrame)
				? window.scrollTo(0, 0)
				: Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		let windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset )
			? Util.addClass(backTop, 'cd-top--is-visible')
			: Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();

let header = document.getElementsByTagName("header")[0];
window.onscroll = function () {
	window.scrollY >= 52
		? header.classList.add("fixed-top")
		: header.classList.remove("fixed-top");
}

function myFunction() {
	let element = document.body;
   element.classList.toggle("dark-mode");
}

