<script>
export default {
    name: 'NavBar',
    props: [
        "navVoices"
    ]
}
</script>

<template>
    <nav class="d-flex align-items-center">
        <ul class="d-flex gap-5 m-0">

            <!-- Nav voices -->
            <li v-for="navVoice in navVoices">{{ navVoice.name }}
                <font-awesome-icon v-if="navVoice.chevronDown == true" :icon="['fas', 'chevron-down']" />

            </li>
        </ul>

        <!-- Shop button -->
        <button class="bg_accent_light btn text-light rounded-pill py-2 px-4 my-3 mx-5">SHOP NOW!</button>

        <!-- Search -->
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </nav>
</template>



<style lang="scss" scoped></style>