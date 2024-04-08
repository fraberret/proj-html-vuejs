import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebookF)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
