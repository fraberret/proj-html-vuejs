<script>

import { featuredProducts } from './data.js'
import { navVoices } from './data.js'
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Socials from './components/Socials.vue'
import AppFooter from './components/AppFooter.vue';



export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        Socials
    },

    data() {
        return {
            navVoices,
            featuredProducts
        }
    }

}
</script>

<template>

    <AppHeader :navVoices />

    <AppMain :featuredProducts />

    <AppFooter :featuredProducts />


</template>



<style lang="scss" scoped></style>