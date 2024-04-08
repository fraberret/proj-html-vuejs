<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader
    }
}
</script>

<template>
    <header class="container">

        <!-- Up section of header -->
        <div class="up_section">

            <!-- Social section -->
            <div class="social_icons ">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <font-awesome-icon :icon="['fab', 'instagram']" />
                <font-awesome-icon :icon="['fab', 'youtube']" />
            </div>

            <!-- Nav section -->
            <nav>



            </nav>
        </div>
    </header>

    <main>

    </main>
</template>



<style lang="scss" scoped></style>