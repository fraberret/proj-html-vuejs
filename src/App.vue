<script>
import { navHeader } from './data'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppHeader from './components/AppHeader.vue';


export default {
    name: 'App',
    components: {
        AppHeader
    },
    data() {
        return {
            navHeader
        }
    }
}
</script>

<template>
    <header>

        <!-- Up section of header -->
        <div class="up_section d-flex justify-content-between align-items-center px-5 border-bottom">

            <!-- Social section -->
            <div class="social_icons d-flex justify-content-between gap-3 ">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </div>

            <!-- Nav section -->
            <nav>
                <ul class="m-0 d-flex align-items-center ">

                    <!-- Shopping Cart -->
                    <li class="nav-item px-3 ">
                        <a class="nav-link active" href="#">Shopping Cart</a>
                    </li>

                    <!-- My Account -->
                    <li class="nav-item py-3 border-end border-start d-flex px-3 align-items-center">
                        <a class="nav-link active pe-3" href="#">My
                            Account</a>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </li>

                    <!-- Cart -->
                    <li class="cart bg_light nav-item py-3 border-end d-flex align-items-center">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                        <a class="nav-link active px-3 d-flex ali" href="#">
                            CART</a>
                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </li>


                </ul>


            </nav>
        </div>

        <!-- Bottom section of header -->
        <div class="bottom_section d-flex justify-content-between align-items-center py-4 px-5 ">

            <img src="/public/images/classic_shop_logo1x.png" alt="">

            <nav>
                <ul class="d-flex gap-4">

                    <li v-for="navVoice in navHeader">{{ navVoice.name }}
                        <font-awesome-icon v-if="navVoice.chevronDown == true" :icon="['fas', 'chevron-down']" />

                    </li>

                </ul>
            </nav>

        </div>
    </header>

    <main>

    </main>
</template>



<style lang="scss" scoped>
.cart {
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>