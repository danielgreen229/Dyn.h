export default {
	mounted(el, binding) {
		document.body.addEventListener('mousemove', event => {
		let x = event.pageX;
		let y = event.pageY;
		let w = window.innerWidth;
		let h = window.innerHeight;
			el.style.transform = 'perspective(10000px) rotateY(' + -((w/2 - x)/binding.value) + 'deg) rotateX(' + ((h/2 - y)/binding.value) + 'deg)'
		});
	},
	unmounted() {
		document.removeEventListener("mousemove", ()=>{});
	}
};