import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';

library.add(faFacebookF, faTwitter, faInstagram, faYoutube, faChevronDown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
