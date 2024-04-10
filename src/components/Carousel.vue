<script>
export default {
    name: 'Carousel',
    props: [
        "featuredProducts"
    ]
}
</script>

<template>
    <div class="position-relative my-5">
        <div class="row">
            <div v-for="product in featuredProducts" class="col">
                <img :src="product.image" alt="">
            </div>



            <div>
                <button class="position-absolute top-50 start-0 translate-middle-y">&leftarrow;</button>
                <button class="position-absolute top-50 end-0 translate-middle-y">click</button>

            </div>


        </div>
    </div>
</template>



<style lang="scss" scoped>
img {
    width: 100%;
    object-fit: contain;
}

button {
    background-color: rgba(0, 0, 0, 0.285);
    border: none;
    color: white;
    padding: 1rem 0.5rem;
}
</style>