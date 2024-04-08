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
            <img src="/images/home1_slide_three_bg_2.jpg" alt="">

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

        <!-- Featured products section -->
        <div class="featured_products container text-center py-5">

            <!-- Title section -->
            <div class="title_section">

                <!-- Title -->
                <div class="title d-flex w-100 justify-content-between align-items-center">
                    <div class="line border-top border-bottom"></div>
                    <h2 class="m-0">Featured Products</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>Must have products from our top sellers</p>
            </div>

            <!-- Gender selector -->
            <div class="gender_section d-flex justify-content-center my-5 ">

                <div class="border py-2 px-5">Men</div>
                <div class="border py-2 px-5">Women</div>
                <div class="border py-2 px-5">Accessories</div>

            </div>

            <!-- Product section -->
            <div class="container">
                <div class="row">

                    <!-- Product -->
                    <div class="col" v-for="product in featuredProducts">
                        <div class="card border-0">

                            <!--image -->
                            <img :src="product.image" alt="">

                            <!--details -->
                            <div class="card-body text-start">

                                <!-- name -->
                                <h5>{{ product.name }}</h5>

                                <!-- tags -->
                                <p>{{ product.tags }}</p>

                                <!-- price section -->
                                <div class="price">

                                    <!-- real price -->
                                    <span :class="{ 'real_price': product.discountedPrice }" class="pe-2">${{
                                        product.realPrice
                                        }}</span>

                                    <!--discounted price  -->
                                    <span v-if="product.discountedPrice != false" class="discount_price pe-2">${{
                                        product.discountedPrice
                                        }}</span>
                                </div>

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