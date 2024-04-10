<script>
import Prices from './Prices.vue';
import Carousel from './Carousel.vue';
import ViewMoreButton from './ViewMoreButton.vue'

export default {
    name: 'AppMain',

    components: {
        Carousel,
        Prices,
        ViewMoreButton
    },

    props: [
        "featuredProducts",
        "collections",
        "blog"
    ],
    computed: {
        bestSellerProducts() {

            return this.featuredProducts.filter(product => product.bestSeller);
        },
        newArrivalProducts() {

            return this.featuredProducts.filter(product => product.newArrival);
        }
    }
}
</script>

<template>
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
                    <template
                        v-for="(product, index) in featuredProducts.filter(item => item.featured && item.gender === 'men').slice(0, 4)"
                        :key="index">
                        <div class="col">
                            <div class="card h-100 border-0">

                                <!--image -->
                                <img :src="product.image" alt="">

                                <!--details -->
                                <div class="h-100 card-body text-start">

                                    <!-- name -->
                                    <h5>{{ product.name }}</h5>

                                    <!-- tags -->
                                    <p>{{ product.tags }}</p>

                                    <!-- price section -->
                                    <div class="price position-absolute bottom-0">
                                        <Prices :product />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Collections section -->
        <div class="my-5">
            <div class="row g-0">

                <!-- Collection card -->
                <div v-for="collection in collections" class="col-4 border_dot">
                    <div class="ratio ratio-1x1">

                        <!-- image -->
                        <img :src="collection.image" alt="">

                        <!-- description -->
                        <div
                            class="description d-flex flex-column justify-content-center align-items-center text-white ">
                            <h3 class="m-0 p-2">{{ collection.name }} Collection</h3>
                            <p>{{ collection.description }}</p>

                            <!-- button -->
                            <ViewMoreButton />
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
                    <h2 class="m-0">Best Sellers</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>Must have products from our top sellers</p>
            </div>

            <Carousel :featuredProducts="bestSellerProducts" />

        </div>

        <!-- Discount section -->
        <div class="discount_section py-5">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="ratio ratio-16x9 border_dot">
                            <img src="/images/promo_box_1_bg.jpg">
                            <div class="d-flex flex-column p-5  justify-content-center text-start text-white">
                                <h1>70% Off</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo.</p>
                                <div>
                                    <ViewMoreButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" col-6 ">
                        <div class=" ratio ratio-16x9 border_dot">
                            <img src="/images/promo_box_2_bg.jpg">
                            <div class="d-flex flex-column p-5  justify-content-center text-start text-white">
                                <h1>Free Shipping</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, illo.</p>
                                <div>
                                    <ViewMoreButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Arrivals section -->
        <div class="new_Arrivals my-5 container-fluid  text-center">

            <!-- Title section -->
            <div class="title_section container">

                <!-- Title -->
                <div class="title d-flex w-100 justify-content-between align-items-center">
                    <div class="line border-top border-bottom"></div>
                    <h2 class="m-0">New Arrivals</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>Must have products from our top sellers</p>
            </div>

            <Carousel :featuredProducts="newArrivalProducts" />

        </div>

        <!-- Review section -->
        <div class="review_section text-center">
            <div class="container description py-5 text-white">
                <img class="my-5" src="/images/man_testimonial.png" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita deserunt consectetur
                    perspiciatis mollitia. Quas a optio eius voluptatem. Sint aperiam eos debitis, laudantium sapiente
                    tempore maxime doloribus vitae ullam quae.</p>
                <p><b>Daro Pineda</b>. Theme Fusion</p>
                <div class="d-flex justify-content-center">
                    <div class="me-2 circle bg-white rounded-circle"></div>
                    <div class="circle border rounded-circle "></div>
                </div>
            </div>
        </div>

        <!-- Blog section -->
        <div class="blog_section text-center my-5">

            <div class="container title_section">

                <!-- Title -->
                <div class="title d-flex w-100 justify-content-between align-items-center">
                    <div class="line border-top border-bottom"></div>
                    <h2 class="m-0">From Our Blog</h2>
                    <div class="line border-top border-bottom"></div>
                </div>

                <p>The latest classic shop news</p>
            </div>

            <div class="container my-5">
                <div class="row">
                    <div v-for="post in blog" class="col-4  ">
                        <div class="ratio ratio-16x9 border_dot">
                            <img :src="post.image" alt="">
                        </div>

                        <div class="body text-start ">
                            <h5 class="py-2">{{ post.name }}</h5>
                            <p class="pb-3">{{ post.date }} | {{ post.comments }} comments</p>
                            <p>{{ post.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Line -->
        <div class="line w-100 border"></div>

        <!-- Featured section -->
        <div class="featured_section container my-5">
            <div class="row">

                <!-- Featured -->
                <div class="col-3 flex-column">
                    <h5 class="my-3">FEATURED</h5>
                    <div class="col-4 d-flex border-bottom justify-content-between w-100 pt-3"
                        v-for="(product, index) in featuredProducts.filter(item => item.featured).slice(0, 3)"
                        :key="index">
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

                <!-- On sale -->
                <div class="col-3 flex-column">
                    <h5 class="my-3">ON SALE</h5>
                    <div class="col-4 d-flex border-bottom justify-content-between w-100 pt-3"
                        v-for="(product, index) in featuredProducts.filter(item => item.onSale).slice(0, 3)"
                        :key="index">
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

                <!-- Top rated -->
                <div class="col-3 flex-column">
                    <h5 class="my-3">TOP RATED</h5>
                    <div class="col-4 d-flex border-bottom justify-content-between w-100 pt-3"
                        v-for="(product, index) in featuredProducts.filter(item => item.topRated).slice(0, 3)"
                        :key="index">
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

                <!-- Latest review -->
                <div class="col-3 flex-column">
                    <h5 class="my-3">LATEST REVIEW</h5>
                    <div class="col-4 d-flex border-bottom justify-content-between w-100 pt-3"
                        v-for="(product, index) in featuredProducts.filter(item => item.LatestReviews).slice(0, 3)"
                        :key="index">
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
            </div>
        </div>

        <!-- Brand logos section -->
        <div class="brand_section bg_light text-center p-5">

            <h6 class="brand_logos_title pb-5 cl_dark ">BRAND LOGOS</h6>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="/images/b_logotype_6.png" alt="">
                    </div>
                    <div class="col">
                        <img src="/images/b_logotype_1.png" alt="">
                    </div>
                    <div class="col">
                        <img src="/images/b_logotype_2.png" alt="">
                    </div>
                    <div class="col">
                        <img src="/images/b_logotype_3.png" alt="">
                    </div>
                    <div class="col">
                        <img src="/images/b_logotype_4.png" alt="">
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

.featured_section {
    & img {
        width: 20%;
    }
}

.brand_logos_title {

    letter-spacing: 0.5rem;

}

.circle {
    width: 10px;
    height: 10px;
}
</style>