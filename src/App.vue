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

        <!-- Collections section -->
        <div class="my-5">
            <div class="row g-0">

                <!-- Collection card -->
                <div class="col-4 border_dot">
                    <div class="ratio ratio-1x1">

                        <!-- image -->
                        <img src="/images/home1_slide_three_bg_2.jpg" alt="">

                        <!-- description -->
                        <div
                            class="description d-flex flex-column justify-content-center align-items-center text-white ">
                            <h3>Lorem, ipsum dolor.</h3>.
                            <p>Lorem, ipsum dolor.</p>

                            <!-- button -->
                            <button class="btn btn-outline-light border-2 rounded-pill py-2 px-4">lorem</button>
                        </div>
                    </div>
                </div>

                <!-- Collection card -->
                <div class="col-4 border_dot">
                    <div class="ratio ratio-1x1">

                        <!-- image -->
                        <img src="/images/home1_slide_three_bg_2.jpg" alt="">

                        <!-- description -->
                        <div
                            class="description d-flex flex-column justify-content-center align-items-center text-white ">
                            <h3>Lorem, ipsum dolor.</h3>.
                            <p>Lorem, ipsum dolor.</p>

                            <!-- button -->
                            <button class="btn btn-outline-light border-2 rounded-pill py-2 px-4">lorem</button>
                        </div>
                    </div>
                </div>

                <!-- Collection card -->
                <div class="col-4 border_dot">
                    <div class="ratio ratio-1x1">

                        <!-- image -->
                        <img src="/images/home1_slide_three_bg_2.jpg" alt="">

                        <!-- description -->
                        <div
                            class="description d-flex flex-column justify-content-center align-items-center text-white ">
                            <h3>Lorem, ipsum dolor.</h3>.
                            <p>Lorem, ipsum dolor.</p>

                            <!-- button -->
                            <button class="btn btn-outline-light border-2 rounded-pill py-2 px-4">lorem</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- Best seller section -->
        <div class="best_seller container text-center">

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

            <div class="container position-relative my-5">
                <div class="row">
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>

                    <div>
                        <button class="position-absolute top-50 start-0 translate-middle">click</button>
                        <button class="position-absolute top-50 start-100 translate-middle">click</button>

                    </div>

                </div>
            </div>

        </div>

        <!-- Discount section -->
        <div class="discount_section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-6  ">
                        <div class="ratio ratio-16x9 border_dot">

                        </div>
                    </div>
                    <div class="col-6 ">
                        <div class="ratio ratio-16x9 border_dot">

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Arrivals section -->
        <div class="new_Arrivals my-5  text-center">

            <!-- Title section -->
            <div class="title_section container">

                <!-- Title -->
                <div class="title d-flex w-100 justify-content-between align-items-center">
                    <div class="line border-top border-bottom"></div>
                    <h2 class="m-0">Featured Products</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>Must have products from our top sellers</p>
            </div>

            <div class="position-relative my-5">
                <div class="row">
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>
                    <div class="col">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus quis laboriosam
                        voluptatum maiores minima quod voluptas, expedita provident totam dolores officia, saepe nostrum
                        aut, in sit iusto consequuntur ratione.
                    </div>

                    <div>
                        <button class="position-absolute top-50 start-0 translate-middle-y">click</button>
                        <button class="position-absolute top-50 end-0 translate-middle-y">click</button>

                    </div>

                </div>
            </div>

        </div>

        <!-- Review section -->
        <div class="review_section text-center">
            <div class="container description py-5 text-white">
                <img class="my-5" src="/images/man_testimonial.png" alt="">
                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita deserunt consectetur
                    perspiciatis mollitia. Quas a optio eius voluptatem. Sint aperiam eos debitis, laudantium sapiente
                    tempore maxime doloribus vitae ullam quae. Accusantium labore nesciunt temporibus sed autem
                    voluptatem, neque perferendis veritatis incidunt ullam eos consectetur ipsum? Distinctio sapiente
                    reiciendis aspernatur eum.</p>
                <p>Lorem, ipsum dolor.</p>
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

.description {
    margin-top: 5rem;
}

.discount_section {
    background-image: url("/images/bkgd_confetti-compressor.jpg");
}

.review_section {
    background-image: url("/images/testimonials_home_1_bg.jpg");

    & img {
        width: 5%;
    }
}
</style>