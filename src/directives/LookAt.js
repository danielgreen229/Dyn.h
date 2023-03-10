export default {
  mounted(el, binding) {
    document.addEventListener('mousemove', (event) => {
      el.style.transform = "translate("+ event.x / binding.value + "px, " + event.y / binding.value +"px)"
    })
    
  },
  unmounted() {
    document.removeEventListener("mousemove", ()=>{});
  }

  
};