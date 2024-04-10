<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
    name: 'Socials'
}
</script>

<template>
    <div class="social_icons d-flex gap-3 ">
        <font-awesome-icon :icon="['fab', 'facebook-f']" />
        <font-awesome-icon :icon="['fab', 'twitter']" />
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'youtube']" />
    </div>
</template>



<style lang="scss" scoped></style>