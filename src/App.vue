<script>
import { navVoices } from './data.js'
import AppHeader from './components/AppHeader.vue';



export default {
    name: 'App',
    components: {
        AppHeader
    },

    data() {
        return {
            navVoices
        }
    }

}
</script>

<template>

    <AppHeader :navVoices />

    <main>

    </main>
</template>



<style lang="scss" scoped>
.cart {
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>