import { createApp } from 'vue'
import App from './App.vue'

import vScroll from './directives/vScroll'
import vLookAt from './directives/LookAt'
import vZLookAt from './directives/ZLookAt'
import vXLookAt from './directives/XLookAt'

const app = createApp(App)



app.directive('scroll', vScroll)
app.directive('look-at', vLookAt)
app.directive('z-look-at', vZLookAt)
app.directive('x-look-at', vXLookAt)

app.mount('#app')
