<script>
import Prices from './Prices.vue'
import Socials from './Socials.vue';

export default {
    name: 'AppFooter',

    props: [
        "Products"
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
                <div class="mail bg-black rounded-circle">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                </div>
                <h3 class="m-0">Subscribe now and get special offers</h3>
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
                            <p>12345 North Main Street</p>
                            <p>New York, NY 555555</p>
                            <p>Phone 1.800.555.6789</p>
                            <p>Email: info@company.com</p>
                            <p>Web: Theme-fusion.com</p>
                        </div>
                        <Socials />
                    </div>



                    <!-- Top rated -->
                    <div class="featured_section col-3 flex-column">
                        <h5 class="mb-5">TOP RATED PRODUCTS</h5>
                        <div class="col-4 d-flex justify-content-between w-100 pt-3"
                            v-for="(product, index) in Products.filter(item => item.topRated).slice(0, 3)" :key="index">
                            <div>
                                <p>{{ product.name }}</p>
                                <div class="text-primary" v-if="product.vote != false">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
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
                                <p class="border_bottom">Lorem ipsum dolor sit amet.</p>
                                <p class="border_bottom">Lorem ipsum dolor sit amet.</p>
                                <p class="border_bottom">Lorem ipsum dolor sit amet.</p>
                                <p class="border_bottom">Lorem ipsum dolor sit amet.</p>
                                <p class="border_bottom">Lorem ipsum dolor sit amet.</p>

                            </div>


                        </div>

                    </div>

                    <!-- Tags -->
                    <div class="col-3 flex-column">
                        <h5 class="mb-5">TAGS</h5>
                        <div class="col-4 d-flex justify-content-between w-100 pt-3">
                            <div class="d-flex flex-wrap gap-2">
                                <template v-for="tag in Products">
                                    <span class="border px-2">{{ tag.tags }}</span>

                                </template>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- COpyright section -->
        <div class="bg-black text-center text-white py-5">
            <p>© Copyright 2024-2025 | Avada Theme by Theme Fusion | All Rights Reserved | Powered by Francesco Berretta
            </p>
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

.mail {
    background-color: black;
    padding: 12px 16px;
}

.border_bottom {
    border-bottom: 1px solid rgba(146, 140, 140, 0.463);

}
</style>