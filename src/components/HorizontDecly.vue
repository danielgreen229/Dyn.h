<script>
export default {
	name: 'horizon-decly',
	data() {
    return {
			show: false
		}
	},
	mounted() {
		this.onResize()
		window.addEventListener('resize', this.onResize);
		
	},
	beforeunmounted() { 
		window.removeEventListener('resize', this.onResize); 
	},
	methods: {  
		onResize() {
			console.log( this.show)
			window.innerHeight >  window.innerWidth ? this.show = true : this.show = false

		}
	}
}
</script>

<template>
<div>
	<div class="horizon-decly__container" v-if="show">
		<div class="phone-rotation__container">
			<img class="rotate-device__img" src="@/assets/imgs/obj/rotatephone.png"/>
			<h1>Rotate your device</h1>
		</div>
	</div>
</div>
</template>

<style scoped>
.horizon-decly__container {
	position: fixed;
    width: 100%;
    height: 100%;
    background-color: #eb432a;
    z-index: 1000;
}
.phone-rotation__container {
	position: absolute;
	transform: translate(-50%, -50%);
	left: 50%;
	top: 50%;
}
.rotate-device__img {
	width: 8vw;
}
</style>