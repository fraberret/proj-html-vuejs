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
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';



library.add(faFacebookF, faTwitter, faInstagram, faYoutube, faChevronDown, faShoppingCart, faSearch, faEnvelope, faStar)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
