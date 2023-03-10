export default {
	mounted(el) {
		document.body.addEventListener('mousemove', event => {
			let x = event.pageX;
			let xEl = el.getBoundingClientRect().left

			if(x > xEl)
				el.classList.add("img-rotated-scale");
			else
				el.classList.remove("img-rotated-scale");

		});
	},
	unmounted() {
		document.removeEventListener("mousemove", ()=>{});
	}
};