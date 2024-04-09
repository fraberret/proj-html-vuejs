<script>
import Logo from './Logo.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavBar from './NavBar.vue';
import Socials from './Socials.vue'


export default {
    name: 'AppHeader',
    components: {
        NavBar,
        Logo,
        Socials
    },
    props: [
        "navVoices"
    ]
}
</script>

<template>
    <header>

        <div class="line w-100 border border-primary"></div>

        <!-- Up section of header -->
        <div class="up_section d-flex justify-content-between align-items-center container ">

            <!-- Social section -->
            <Socials />

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

        <!-- Line between first and second section -->
        <div class="line w-100 border"></div>

        <!-- Bottom section of header -->
        <div class="bottom_section d-flex justify-content-between align-items-center py-4 container ">

            <!-- Logo -->
            <Logo />

            <!-- Bottom nav -->
            <NavBar :navVoices />



        </div>
    </header>
</template>



<style lang="scss" scoped></style>