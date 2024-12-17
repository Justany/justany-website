import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fadt } from '@fortawesome/duotone-thin-svg-icons'

/* add icons to the library */
library.add(
    fab,
    far,
    fadt
)

const app = createApp(App)
const pinia = createPinia()

/* add font awesome icon component */
app.component('font-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router)
app.mount('#app')
