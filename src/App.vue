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
    <header>
        <nav>
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
        </nav>
    </header>

    <main>

    </main>
</template>



<style lang="scss" scoped></style>