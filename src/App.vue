<template>
<div>
  <HorizontDecly/>
  <dinH @blur-backgound="blurBgFun" @start-flower-anim="startAnim">
  </dinH>

  <div id="bg-1">
    <div class="bg-1-img__container">
      <img v-if="!animFlower" v-look-at="50" class="bg-1__img" src="@/assets/imgs/bgforms/1.png"/>  
      <img v-if="!animFlower" v-look-at="15" class="bg-1__img" src="@/assets/imgs/bgforms/2.png"/>
      <img v-if="!animFlower" v-look-at="40" class="bg-1__img" src="@/assets/imgs/bgforms/3.png"/>
      <div v-if="!animFlower" class="bg-1-title__container" id="Point-1">
        <h1 class="bg-1__title">Dyn.<span class="title-span">H</span></h1>
      </div>
      <div v-if="!animFlower" class="bg-1__text">
          <p class="bg-1__p">  
            Dynamic
          </p>
          <transition name="fade">
            <span v-look-at="200" class="dyn__span" v-show="target != ''">{{ target }}</span>
          </transition>
      </div>
    </div>     
    <slider v-if="!animFlower" :refto="'Point-2'"/>

    <div class="block-2__container" >
      <div class="block-2-text__container"  >
        <h1 class="block-2__h1"  v-scroll>Any form</h1>
        <p class="block-2__p"  v-scroll>This navigation can all<br>what you want</p>

      </div>
      <slider class="slider-point-3" :refto="'Point-3'"/>
      <div id="Point-2"></div>
      <img class="bg-1-s-1__img" src="@/assets/imgs/bgforms/6.png">

    </div>

    <div class="block-3__container" id="Point-3">
      <div class="block-3-text__container">
        
      </div>
      <img 
        :class="{'blur-bg': blurBg}"
        v-look-at="15" 
        class="block-3-s-1__img" 
        src="@/assets/imgs/bgforms/4.png"
        />
      <img 
        :class="{'blur-bg': blurBg}"
        v-look-at="40" 
        class="block-3-s-2__img" 
        src="@/assets/imgs/bgforms/8.png"
      />
      <div id="Point-4"></div>

      <transition name="fade">
      <div  v-show="animFlower">
        <animFlowers/>
        
      </div>
    </transition>
    </div>    
  </div>
  <div id="bg-2">
      <div class="block-4__container">
        <div id="Point-5"></div>
      </div>
      <div class="block-5__container">
        <div id="Point-6"></div>
      </div>
    </div>
</div>
</template>

<script>
import dinH from './components/dinH.vue'
import animFlowers from './components/animFlowers.vue'
import slider from './components/slide.vue'

import HorizontDecly from './components/HorizontDecly.vue'

export default {
  name: 'App',
  data () {
    return {
     whois: ['Head', 'Block', 'Circle'],
     target: 'Head',
     blurBg: false,
     animFlower: false
    }
  },
  mounted() {
     window.setInterval(()=>{
      this.pollPerson();
    }, 4000);
  },
  methods: {
    pollPerson(){
      const first = this.whois.shift();
      this.whois = this.whois.concat(first);
      this.target = ''
      setTimeout(()=>{
        this.target = this.whois[0]
      },500)
    },
    blurBgFun (openArm) {
      this.blurBg = openArm
    },
    startAnim (aF) {
      this.animFlower = aF
    },
  },
  components: {
    dinH, 
    slider,
    animFlowers,
    HorizontDecly
  }
}
</script>

<style>
.bg-2__img {
  right: 3vw;
  left: unset;
  bottom: 2vw;
  position: absolute;
  width: 53vw;
  -o-object-position: right;
  object-position: left;
  z-index: 1;
  -o-object-fit: contain;
  object-fit: contain;
  transition: 0.5s linear all;
}
.block-4__container {
  position: relative;
  width: 100%;
  height: 120vh;
  background: linear-gradient(34deg, #6c0018, rgb(30 0 35), rgb(82 82 88));
}
.block-5__container {
  position: relative;
  width: 100%;
  height: 120vh;
  background: linear-gradient(34deg, #6c0018, rgb(30 0 35), rgb(82 82 88));
}
#Point-6 {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#Point-5 {
  position: absolute;
  bottom: 0;
  width: 100%;
}
#bg-2 {
  box-sizing: border-box;
  max-height: 24vh;
  overflow: hidden;
}




#Point-4 {
  position: absolute;
  bottom: -100vh;
  left: 0;
}

.block-3__container {
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin-top: -5vh;
}
.block-3-s-1__img {
  bottom: -17vh;
  left: -22vw;
  width: 57vw;
  -o-object-position: right;
  object-position: left;
  z-index: 1;
  -o-object-fit: contain;
  object-fit: contain;
  position: absolute;
  transition: 0.3s all linear;
}
.block-3-s-2__img {
  transition: 0.3s all linear;
  top: -31vh;
  right: -15.5vw;
  width: 57vw;
  -o-object-position: right;
  object-position: right;
  z-index: 0;
  -o-object-fit: contain;
  object-fit: contain;
  position: absolute;
}
.slider-point-3 {
  margin-top: 25vh;
}
.down-svg {
  width: 1.5vw;
  margin-left: 0.7vw;
}






.block-2-text__container {
  margin-top: -10vh;
  margin-left: 3vw;
  text-align: left;
  border-left: solid white 0.5vw;
  padding-left: 3vw;
  box-sizing: border-box;
}
.block-2__h1 {
  transition: all 1s;
}
.block-2__p {
  transition: all 1s;
}
#Point-2 {
     top: 56vh;
    height: 30px;
    position: absolute;
}


.dyn__span {
  font-size: 1.2vw;
  margin-top: -1.5vw;
  width: 20%;
  margin-left: -1.5vw;
}
.bg-1-img__container {
  width: 100%;
  height: 100vh;
  position: relative;
}
html {
  scroll-behavior: smooth;
  background-color: black;
}
.text-circle__container {
  padding-left: 3vw;
}
.bg-1-text {
  margin: 0;
}
.bg-1-content__container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-1-about__container {
  margin-top: 130vh;
  height: 100vh;
  z-index: 3;
  position: relative;

}
body {
  margin: 0;
}
#app {
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.bg-1-title__container {
  border: 0.5vh solid #eb432a;
  width: 80vw;
  left: 10vw;
  top: 15vh;
  position: absolute;
  height: 56vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-1__title {
  font-size: 18vw;
  line-height: 0;
  position: absolute;
  z-index: 1;
}
#bg-1 {
  background: linear-gradient(112deg, #6c0018, rgb(30 0 35), rgb(82 82 88));
  height: 400vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}
.bg-1__img {
  position: absolute;
  transition: 0.4s linear all;
}
.bg-1__img:nth-child(1) {
  bottom: calc(-3vw - 3vh);
  right: -9vw;
  width: 50vw;
  object-position: right;
  z-index: 1;
  object-fit: contain;
  max-height: 75vh;
}
.bg-1__img:nth-child(2) {
  bottom: calc(-1vw - 1vh);
  left: -3vw;
  width: 34vw;
  -o-object-position: right;
  object-position: left;
  z-index: 3;
  -o-object-fit: contain;
  object-fit: contain;
  max-height: 58vh;
}
.bg-1__img:nth-child(3) {
  top: calc(-1vw - 1vh);
  right: 0.5vw;
  width: 21vw;
  -o-object-position: right;
  object-position: right;
  z-index: 1;
  -o-object-fit: contain;
  object-fit: contain;
  max-height: 31vh;
}
.title-span {
  color: #eb432a;
}
.bg-1__text {
  padding: 2vw;
  box-sizing: border-box;
  position: absolute;
  top: 12vh;
  left: 7.6vw;
  width: 22vw;
  color: white;
  z-index: 2;
  text-align: left;
  line-height: normal;
  height: 8vh;
  background-color: #eb432a;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scale-title-box 4s infinite;
}
@keyframes scale-title-box {
  0% { transform: translate(0, 0) rotate(0deg); }
  70% { transform: translate(0, 0) rotate(0deg); }
  75% { transform: translate(-1px, 2px) rotate(-1deg); }
  80% { transform: translate(-3px, 1px) rotate(0deg); }
  85% { transform: translate(3px, 1px) rotate(-1deg); }
  90% { transform: translate(-1px, -1px) rotate(1deg); }
  95% { transform: translate(1px, 2px) rotate(0deg); }
  100% {transform: translate(0, 0) rotate(0deg); }
}

.bg-1__p {
  font-size: 2vw;
  font-weight: 500;
  white-space: nowrap;
  margin: 0;
  width: 50%;
}
.block-2__container {
  position: relative;
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
}
.bg-1-s-0__img {
  bottom: 180vh;
  position: absolute;
  left: -14vw;
  z-index: 10;
  width: 89vh;
}
.bg-1-s-1__img {
  
  width: 46vw;
 
  -o-object-position: right;
  object-position: right;
  z-index: 5;
  -o-object-fit: contain;
  object-fit: contain;
  object-position: left;
  
}
.img-rotated-scale {
  transform: scale(-1, 1);
  right: 19.8vw !important;
}




.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 1s ease;
}

h2 {
  font-size: 2vw;
  font-weight: bold;
  margin: 0;
  margin-bottom: 1vw;
}
h1 {
  font-size: 3vw;
  font-weight: bold;
  margin: 0;
  margin-bottom: 1vw;
}
p {
  font-size: 1.5vw;
  font-weight: 500;
  margin: 0;
  margin-bottom: 1vw;
}

h1::before {  
  transform: scaleX(0);
  transform-origin: bottom right;
}

h1:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.hovered-text::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  inset: 0 0 0 0;
  background: #eb432a;
  margin-left: -0.5vw;
  margin-right: -0.5vw;
  z-index: -1;
  transition: transform .3s ease;
}

.hovered-text {
  cursor: pointer;
  position: relative;
}
.blur-ts {
  transition: 0.3s all linear;
}
.blur-bg {
  opacity: 0.5;
}


</style>
