import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config } from '@fortawesome/fontawesome-svg-core'

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

import '@fortawesome/fontawesome-svg-core/styles.css'

// Import des icônes solid
import { 
  faMobile, faDatabase, faProjectDiagram, 
  faNetworkWired, faServer, faInfinity,
  faCloud, faFire, faCloudUpload, faWater,
  faBullhorn, faChartLine, faSearch,
  faWandMagicSparkles, faRobot, faChartSimple,
  faImage
} from '@fortawesome/free-solid-svg-icons'

// Import des icônes brands
import { 
  faVuejs, faReact, faSwift, faJs,
  faCss3, faNode, faPhp, faDocker,
  faAws, faGoogle, faLinux, faFacebook,
  faTiktok, faFigma, faGithub 
} from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'
import './style.css'

// Ajouter les icônes solid
library.add(
  faMobile, faDatabase, faProjectDiagram,
  faNetworkWired, faServer, faInfinity,
  faCloud, faFire, faCloudUpload, faWater,
  faBullhorn, faChartLine, faSearch,
  faWandMagicSparkles, faRobot, faChartSimple,
  faImage
)

// Ajouter les icônes brands
library.add(
  faVuejs, faReact, faSwift, faJs,
  faCss3, faNode, faPhp, faDocker,
  faAws, faGoogle, faLinux, faFacebook,
  faTiktok, faFigma, faGithub
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-icon', FontAwesomeIcon)

app.mount('#app')
