<script>
import { featuredProducts } from './data.js'
import { navVoices } from './data.js'
import AppHeader from './components/AppHeader.vue';



export default {
    name: 'App',
    components: {
        AppHeader
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

    <main>

        <!-- Jumbotron section -->
        <div class="jumbotron text-center text-white">

            <!-- img -->
            <img src="/public/images/home1_slide_three_bg_2.jpg" alt="">

            <!-- Text -->
            <div class="jumbotron_text">
                <h1 class="m-0">Brand New Arrivals</h1>
                <p>NEW COLLECTION FROM NEW YORK</p>

                <!-- Buttons -->
                <div class="buttons d-flex gap-3 justify-content-center">
                    <button class="btn btn-outline-light border-2 rounded-pill py-3 px-5">VIEW ALL</button>
                    <button class="btn btn-outline-light border-2 py-3 px-5 rounded-pill">LOOKBOOK</button>
                </div>
            </div>
        </div>

        <div class="featured_products container text-center py-5">

            <div class="title_section">

                <div class="title d-flex w-100 justify-content-between align-items-center">
                    <div class="line border-top border-bottom"></div>
                    <h2 class="m-0">Featured Products</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>Must have products from our top sellers</p>
            </div>

            <div class="gender_section d-flex justify-content-center my-5 ">

                <div class="border py-2 px-5">Men</div>
                <div class="border py-2 px-5">Women</div>
                <div class="border py-2 px-5">Accessories</div>

            </div>

            <div class="container">
                <div class="row">
                    <div class="col" v-for="product in featuredProducts">
                        <div class="card border-0">
                            <img :src="product.image" alt="">
                            <div class="card-body text-start">
                                <h5>{{ product.name }}</h5>
                                <p>{{ product.tags }}</p>
                                <span class="pe-2" v-if="product.discountedPrice !== false">{{ product.discountedPrice
                                    }}€</span>

                                <span>{{ product.realPrice }}€</span>
                            </div>
                        </div>
                    </div>
                </div>
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

    & p {
        font-size: 26px;
        font-weight: 200;
    }



}

.line {

    width: 35%;
}
</style>