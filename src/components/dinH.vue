<script>
export default {
  name: 'dinH',
  data() {
    return {
      point: 0,
      showNavIcons: true,
      openArm: false,
      timedNav: null,
      ShowFullFooter: false,
      ShowContactText: false,
      timedContactText: null,
      flowerAnim: false
    }
    
  },
  mounted() {
    var target = []
    target.push(document.querySelector('#Point-1'))
    target.push(document.querySelector('#Point-2'))
    target.push(document.querySelector('#Point-3'))
    target.push(document.querySelector('#Point-4'))
    target.push(document.querySelector('#Point-5'))
    target.push(document.querySelector('#Point-6'))

    document.addEventListener('scroll', () => {
      this.openArm = false
      this.ShowFullFooter = false
      this.ShowContactText = false
      this.flowerAnim = false
      if (window.scrollY <= target[0].getBoundingClientRect().top) {
        this.point = 0
      }
      else if (window.scrollY >= target[0].getBoundingClientRect().top) {
        this.point = 1
      }
      if (window.scrollY >= target[1].getBoundingClientRect().top) {
        this.point = 2
      }
      if (window.scrollY >= target[2].getBoundingClientRect().top) {
        this.point = 3
      }
      if (window.scrollY >= target[3].getBoundingClientRect().top) {
        this.point = 4
      }
      if (window.scrollY >= target[4].getBoundingClientRect().top) {
        this.point = 5

      }
      if (window.scrollY >= target[5].getBoundingClientRect().top) {
        this.point = 6
        this.openArm = true
      }
    })
  },
  watch: {
    openArm () {
      this.$emit('blur-backgound', this.openArm)
    },
    ShowContactText () {
      this.$emit('start-flower-anim', this.ShowContactText)
    },
    point() {
      this.StopTimeout()
      if(this.point == 6) {
        this.timedNav = setTimeout(()=>{
          this.ShowFullFooter = true
        }, 1100)
        this.timedContactText = setTimeout(()=>{
            this.ShowContactText = true
          }, 1500)
      }
      if(this.point != 2 && this.point != 4)
        this.showNavIconsFun(true)
      else 
        this.showNavIconsFun(false)
    }
  },
  beforeUnmount() {
    document.removeEventListener("scroll", this.onScroll())
  },
  methods: {
    scrollTo(reffer) {
      if(reffer == 'Point-6') {
        window.scrollTo(0,9999);
      } 
      else
        document.getElementById(reffer).scrollIntoView({block: "center"});
    },
    goTo(url) {
      window.open(url, '_blank').focus();
    },
    openArmFun() {
      this.openArm = !this.openArm
    },
    onScroll() {
      this.point = 0
    },
    showNavIconsFun(show) {
      if(show) {
        this.timedNav = setTimeout(()=>{
          this.showNavIcons = true
        }, 800)
      } 
      else {
        this.showNavIcons = false
      }
      
    },
    StopTimeout() {
      clearTimeout(this.timedNav);
      clearTimeout(this.timedContactText);

    }
  }
}
</script>

<template>
  <div class="main__container">
    <div class="din-top__header"></div>
    <div class="dinamic-header" id="1">
      <div 
        class="din__bg abs-center din-radius bg-white pos-abs bg-text"
        :class="{
          'din-top-1': point == 0,
          'din-rotated': point == 1, 
          'din-eye': point == 2, 
          'din-block': point == 3 || point == 5,
          'din-container': point == 4,
         
          'din-footer': point == 6,
          'din-container-opened': point == 4 && openArm,
          'full-footer': ShowFullFooter
        }"
      >

        <transition name="fade-nav">
          <div 
            class="din-content__container" 
            v-if="showNavIcons"
            :class="{
              'din-content-footer__container' : point == 6,
              'din-content-full-footer': ShowFullFooter
            }"
          >
            <p @click="scrollTo('Point-1')" class="din__p">Dyn.<span class="title-span">H</span> </p>
            <div 
              class="din-img__container" 
              v-z-look-at="20" 
            >
              <img 
                @click="scrollTo('Point-2')"
                :class="{
                  'din-rotated-img': point == 1 || point == 5,
                }"
                class="din-img-1" 
                src="@/assets/imgs/headers/eye.png"
              />
            </div>
            
            <img 
              @click="scrollTo('Point-3')"
              :class="{
                  'din-rotated-img': point == 1 || point == 3 || point == 5,
                }"
              class="din-img-1 din-img-float" 
              style="filter: invert(0)" 
              src="@/assets/imgs/headers/click.png"/>
            <img 
              @click="scrollTo('Point-6')"
              :class="{
                  'din-rotated-img': point == 1 || point == 3 || point == 5,
                }"
              class="din-img-1 din-img-float" 
              src="@/assets/imgs/headers/contact.png"
            />
          </div>
        </transition>
        <transition name="fade">
          <div v-if="point == 2" class="y__container">
            <div class="y-i" v-look-at="6"></div>
          </div>
        </transition>


        <transition name="fade-nav">
          <div 
            class="din-p-4__container" 
            v-show="point == 4"
            :class="{'din-p-4-opened__container': openArm}"
          >
            <h1 
              :class="{'din-p-4-opened__h1': openArm}"
              @click="openArmFun()" 
              class="hovered-text din-p-4__h1"
            >
              Navigation for all 
              <img class="din-p-4-click__img" src="@/assets/imgs/headers/click.png"/>
            </h1>
            <transition name="open-arm">
              <div v-show="openArm" class="din-p-4__teeth">
                <div class="open-arm__container">
                  <div class="open-arm__content">
                    <img v-z-look-at="70" class="din-p-4-click__svg" src="@/assets/imgs/obj/customer.svg"/>
                    <div class="open-arm__text">
                      <h2 class="open-arm__h2">Customer</h2>
                      <p class="open-arm__p">The best way to show your content</p>
                    </div>
                  </div>  
                  <div class="open-arm__content">
                    <img v-z-look-at="100" class="din-p-4-click__svg" src="@/assets/imgs/obj/seller.svg"/>
                    <div class="open-arm__text">
                      <h2 class="open-arm__h2">Seller</h2>
                      <p class="open-arm__p">Sell you with comfort usage</p>
                    </div>
                  </div>  
                  <div class="open-arm__content">
                    <img v-z-look-at="150" class="din-p-4-click__svg" src="@/assets/imgs/obj/brand-man.svg"/>
                    <div class="open-arm__text">
                      <h2 class="open-arm__h2">Service</h2>
                      <p class="open-arm__p">Light  way to charm<br><br></p>
                    </div>
                  </div>  
                </div>

                
                
                
              </div>
            </transition>
            
          </div>
        </transition>
        <transition name="fade-nav">
          <div 
            v-if="ShowFullFooter && point == 6" 
            class="din-footer__nav"
            
          >
            <transition name="fade-nav">
              <div v-if="ShowContactText == true">
                <div class="din-open-footer__word">
                  <h1 class="din-open-footer__letter">C</h1>
                  <h1 class="din-open-footer__letter">o</h1>
                  <h1 class="din-open-footer__letter">n</h1>
                  <h1 class="din-open-footer__letter">t</h1>
                  <h1 class="din-open-footer__letter">a</h1>
                  <h1 class="din-open-footer__letter">c</h1>
                  <h1 class="din-open-footer__letter">t</h1>
                  <h1 class="din-open-footer__letter">&nbsp;</h1>
                  <h1 class="din-open-footer__letter">m</h1>
                  <h1 class="din-open-footer__letter">e</h1>  
                </div>
                <div class="din-open-footer-img__container">
                  <img 
                    class="din-open-footer__img footer-img din-anim-hover" 
                    src="@/assets/imgs/obj/git.svg"
                    @click="goTo('https://github.com/danielgreen229')"
                    >
                  <img 
                    @click="goTo('https://career.habr.com/daniel-visovatov')"
                    class="din-open-footer__img footer-img din-anim-hover" 
                    src="@/assets/imgs/obj/habr.svg"
                    >
                  <img 
                    class="din-open-footer__img footer-img din-anim-hover" 
                    src="@/assets/imgs/obj/teleg.svg"
                    @click="goTo('https://t.me/dozer_stoun')"
                    >
                  <img v-x-look-at class="din-open-footer__img footer-img" src="@/assets/imgs/obj/man-head.svg">
                  <img class="din-open-footer__img footer-img" src="@/assets/imgs/obj/man-tail.svg">
                </div>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>




<style scoped>
.din-footer__nav {
  position: absolute;
  margin-top: 4vw;
}
.din-open-footer__word {
  display: flex;
  flex-direction: row;
  border-bottom: solid 1.5vw white;
  padding-bottom: 2vw;
  margin-top: 0vw;
}
.din-open-footer__letter {
  font-size: 10vw;
  text-transform: capitalize;
  transform: scaleY(2.5);
  -webkit-transform: scaleY(2.5);
  letter-spacing: 1vw;
  cursor: default;
  user-select: none;
  transition: 0.3s all linear;
}
.din-open-footer__letter:hover {
  transform: scaleY(2.3);
  -webkit-transform: scaleY(2.3);
}
.din-open-footer__letter:nth-child(3) {
  z-index: 3;
}
.din-open-footer__letter:nth-child(4) {
  z-index: 3;
}
.din-open-footer__letter:nth-child(9) {
  z-index: 3;
}

.din-open-footer__img:nth-child(1) {
  background-color: rgb(30 0 35);
    left: 12vw;
    top: 4.5vw;
    border: inset 1vw;
    box-sizing: border-box;
    border-radius: 50%;
}
.din-open-footer__img:nth-child(2) {
    background-color: #eb432a;
    left: 26vw;
    top: 1.5vw;
    border: inset 1vw #eb432a;
    box-sizing: border-box;
    border-radius: 50%;
    width: 13vw;
    height: 13vw;
}
.din-open-footer__img:nth-child(3) {
  background-color: #0088cc;
  left: 65vw;
  top: 5.5vw;
  border: inset 1vw #0088cc;
  box-sizing: border-box;
  border-radius: 50%;
  width: 9vw;
  height: 9vw;
}
.din-open-footer__img:nth-child(4) {
  filter: invert(1);
  width: 1.8vw;
  top: 6.5vw;
  right: 20.25vw;
  transition: 0.2s ease all;
}
.din-open-footer__img:nth-child(5) {
  filter: invert(1);
  width: 4vw;
  top: 9vw;
  right: 19vw;
}
.footer-img {
  position: absolute;
  width: 8vw;
  height: 8vw;
}
.din-anim-hover {
  cursor: pointer;
  transition: 0.5s ease all;
}
.din-anim-hover:hover {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}







.din-p-4__container {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
  transition: 1s all;
  position: relative;
  top: 0;
  width: 75vw;
  height: 40vh;
  left: 0;
  display: flex;
  margin-left: -6vw;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.din-p-4-opened__container {
  position: relative;
  top: 0;
  width: 65vw;
  height: 75vh;
  left: 0;
  display: flex;
  margin: 0;

  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.din-p-4-opened {

}
.din-p-4__h1 {
  margin: 0;
  margin-top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transition: 1s all;
  white-space: nowrap;
}
.din-p-4-opened__h1 {
  margin-top: 6vw;
  transform: translateY(0%);
  -webkit-transform: translateY(0%);

}
.din-p-4__teeth {
  clip-path: polygon(0 9%, 5% 20%, 7% 5%, 11% 15%, 12% 5%, 15% 14%, 18% 6%, 21% 12%, 23% 5%, 26% 11%, 30% 5%, 33% 11%, 37% 6%, 41% 11%, 45% 6%, 48% 11%, 53% 5%, 56% 12%, 62% 5%, 64% 13%, 69% 7%, 72% 13%, 75% 7%, 78% 13%, 81% 8%, 84% 13%, 88% 8%, 91% 16%, 94% 10%, 96% 21%, 100% 9%, 100% 88%, 96% 80%, 94% 90%, 90% 83%, 88% 93%, 83% 86%, 81% 94%, 77% 88%, 75% 95%, 72% 87%, 69% 95%, 66% 89%, 64% 95%, 60% 89%, 57% 95%, 53% 89%, 49% 95%, 46% 89%, 42% 95%, 39% 89%, 36% 95%, 33% 89%, 30% 94%, 27% 88%, 23% 94%, 21% 87%, 16% 93%, 14% 85%, 9% 91%, 8% 82%, 5% 88%, 4% 77%, 0 86%, 0 83%, 0% 77%, 0 41%);
  background-color: #eb432a;
  width: 65vw;
  position: absolute;
  height: 52vh;
  bottom: 0;
}
.din-img__container {
  width: 100%;
  height: 100%;
}
.din-p-4-click__img {
  width: 1.5vw;
  height: 1.5vw;
  transform: translate(-0.5vw, -1vw);
  -webkit-transform: translate(-0.5vw, -1vw);
}
.din-p-4-click__svg {
  width: 13vw;
  height: 10vw;
}
.open-arm__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
}
.open-arm__container {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 6vw 0 6vw;
}
.open-arm__text {
  color: black;
}
.open-arm__h2 {

}
.open-arm__p {

}







.y__container {
  width: calc(100% - 3vw);
  height: calc(100% - 3vw);
  background-color: white;
  border-radius: 50%;
  margin: auto;
}
.y-i {
  position: absolute;
  width: 15%;
  height: 15%;
  background-color: black;
  border-radius: 50%;
  left: 15%;
  top: 5%;
  transition: 0.1s all linear;
  transform: translate(50%, 50%);
  -webkit-transform: translate(50%, 50%);
}
.din__p {
  margin: 0;
  font-size: 1.3vw;
  font-weight: 800;
  cursor: pointer;
}
.din-content__container {
  max-height: 2vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 0.5vw;
  justify-content: space-between;
  transition: 1s all linear;
  max-width: 40%;
}
.din-content-footer__container {
  transform: translate(-43vw, -15vh);
  -webkit-transform: translate-43vw, -15vh)
}
.din-top__header {
  width: 100%;
  position: absolute;
  height: 3vh;
  left: 0;
  background-color: black;
  z-index: 3;
}
.pos-abs {
  position: fixed;
}
.din-top-1 {
  top: 1vh;
}
.abs-center {
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
}
.bg-text {
  color: white;
}
.bg-white {
  background-color: black;
}
.din-radius {
  border-radius: 15px;
  border-radius: 0.7vw;
}
.din__bg {
  width: 31vw;
  height: 3vw;
  z-index: 3;
  
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6vw;
  box-sizing: border-box;
  transition: all 0.8s;
  -webkit-transition: 0.8s all;
} 

.din-img-1 {
  filter: invert(1);
  width: 100%;
  height: 100%;
  transition: 0.5s all linear;
  cursor: pointer;
  object-fit: contain;
}
.din-img-float {
  max-height: 1.3vw;
  object-fit: contain;
}
.din-rotated-img {
  transform: rotate(-90deg);
  -webkit-transform: rotate(-90deg);
}
.din-rotated {
  
  transform-origin: left;
  transition: 1s all;
  transform: rotate(90deg) translate(-50%, -50%);
  left: calc(3vw + 4vh);
  top: 50%;
}
.din-eye {
  width: 30vw;
  height: 30vw;
  z-index: 1;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left;
  border-radius: 50%;
  margin-left: -10vw;
}

.din-block {
  transform: rotate(90deg) translate(-50%);
  -webkit-transform: rotate(90deg) translate(-50%);
  transform-origin: left;
  -webkit-transform-origin: left;
  left: calc(100% - 6vw + 1vh);
  top: 50%;
}
.din-container {
  top: 50%;
  transform: translate(-50%, -50%) rotate(90deg);
  -webkit-transform: translate(-50%, -50%) rotate(90deg);
  width: 40vh;
  height: 65vw;
}
.din-container-opened {
  width: 75vh;
}
.din-footer {
  transform: rotate(0deg) translate(0%);
  -webkit-transform: rotate(0deg) translate(0%);
  transform-origin: right;
  -webkit-transform-origin: right;
  left: 0;
  top: calc(100% - 25vh);
  bottom: 0;
  width: 100%;
  height: 25vh;
}
.full-footer {
  height: 55vh;
  top: calc(100% - 55vh);
} 
.din-content-full-footer {
  transform: translate(-43vw, -29vh);
  -webkit-transform: translate(-43vw, -29vh);
}

.fade-nav-enter-active {
  transition: opacity 1s linear
}
.fade-nav-leave-active {
  transition: opacity 0s;
}

.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
  position: absolute;
}

.open-arm-enter-active {
  transition: all 0.8s ease;
}
.open-arm-leave-active {
  transition: all 0.7s ease;
}

.open-arm-enter-from,
.open-arm-leave-to {
  height: 0;
}

</style>









