import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from "./router/index.js";
import {createPinia} from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faCakeCandles,
    faEnvelope,
    faList,
    faNetworkWired,
    faPhone,
    faRightFromBracket
} from "@fortawesome/free-solid-svg-icons";


const app = createApp(App)

/* add font awesome icon component */
library.add(faCakeCandles, faPhone, faEnvelope, faRightFromBracket, faList, faNetworkWired)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')