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

        <div class="jumbotron text-center text-white">


            <img src="/public/images/home1_slide_three_bg_2.jpg" alt="">

            <div class="jumbotron_text">
                <h1 class="m-0">Brand New Arrivals</h1>
                <p>NEW COLLECTION FROM NEW YORK</p>
            </div>

        </div>

    </main>
</template>



<style lang="scss" scoped>
.jumbotron {
    position: relative;
}

img {
    width: 100%;
    object-fit: cover;

}

.jumbotron_text {
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & h1 {
        font-size: 90px;
    }
}
</style>