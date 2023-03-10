<script>
export default {
	name: 'Slider-to',
	props: [
		'refto'
	],
	methods: {
		slideTo() {
			
			// document.getElementById('Point-2').scrollIntoView();
			document.getElementById(this.refto).scrollIntoView({block: "center"});

		}
	}
}
</script>

<template>
	<div class="slide__container" @mouseover="slideTo()">
		<p class="slide-p">slide</p>
		<div class="slide-img__box"></div>
	</div>
</template>



<style scoped>
.slide__container {
	position: absolute;
	top: 88vh;
	left: 50%;
	transform: translateX(-50%);
}
.slide-img__box {
	background-color: white;
    width: 8vw;
    height: 1vw;
    border-radius: 1vw;
    animation: moveslide-box 5s infinite;
}
.slide-p {
	animation: moveslide-p 5s infinite;
	font-size: 1.5vw;
    margin: 1vw;
}
@keyframes moveslide-p {
  0% {
    opacity: 0;
  }
  50% {
	opacity: 1;
	transform: scale(1.5);
  }
  100% {
    opacity: 0;
  }
}
	
@keyframes moveslide-box {
  0% {
    opacity: 1;
	transform: translateY(-1.5vw);
  }
  50% {
	transform: translateY(0);
  }
  100% {
    opacity: 1;
	transform: translateY(-1.5vw);
  }
}
</style>



