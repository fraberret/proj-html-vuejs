<script>
import Prices from './Prices.vue'
import Socials from './Socials.vue';

export default {
    name: 'AppFooter',

    props: [
        "featuredProducts"
    ],
    components: {
        Socials,
        Prices
    }
}
</script>

<template>
    <footer>

        <!-- Newsletter section -->
        <div class="subscribe bg_dark text-white py-5">
            <div class=" py-5 container d-flex justify-content-between align-items-center">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                <h4 class="m-0">Lorem ipsum dolor sit amet consectetur.</h4>
                <div>
                    <input type="text" class="py-2 px-4 rounded-pill" placeholder="Insert your email">
                    <button class="bg_accent_light btn text-light rounded-pill py-2 px-5  ms-2">SEND</button>
                </div>
            </div>
        </div>

        <!-- Main footer section -->
        <div class="text-white bg_darkest">
            <div class="footer_section container py-5  ">
                <div class="row">

                    <!-- Featured -->
                    <div class="col-3 flex-column">
                        <img class="logo" src="/images/classic_shop_logo_footer.png" alt="">
                        <div class="my-5 body">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <Socials />
                    </div>



                    <!-- Top rated -->
                    <div class="featured_section col-3 flex-column">
                        <h5 class="mb-5">TOP RATED PRODUCTS</h5>
                        <div class="col-4 d-flex justify-content-between w-100 pt-3"
                            v-for="(product, index) in featuredProducts.filter(item => item.topRated).slice(0, 3)"
                            :key="index">
                            <div>
                                <p>{{ product.name }}</p>
                                <Prices :product />
                            </div>

                            <img class="pb-4" :src="product.image" alt="">
                        </div>
                    </div>

                    <!-- Posts  -->
                    <div class="col-3 flex-column">
                        <h5 class="mb-5">RECENT POSTS</h5>
                        <div class="col-4 d-flex justify-content-between w-100 pt-3">
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>


                        </div>

                    </div>

                    <!-- Tags -->
                    <div class="col-3 flex-column">
                        <h5 class="mb-5">TAGS</h5>
                        <div class="col-4 d-flex justify-content-between w-100 pt-3">
                            <div>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <p>Lorem ipsum dolor sit amet.</p>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- COpyright section -->
        <div class="bg-black text-center text-white py-5">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi, repudiandae.</p>
            <img src="/images/payment_cards_footer.png" alt="">
        </div>


    </footer>
</template>



<style lang="scss" scoped>
.logo {
    color: white;
}

.featured_section {
    & img {
        width: 20%;
    }


}

.logo {
    width: 70%;
}
</style>