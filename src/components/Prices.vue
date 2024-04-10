<script>
export default {
    name: 'Prices',
    props: [
        "product"
    ]
}
</script>

<template>



    <!-- real price -->
    <span :class="{ 'real_price': product.discountedPrice }" class="pe-2">${{
        product.realPrice
    }}</span>

    <!--discounted price  -->
    <span v-if="product.discountedPrice != false" class="discount_price pe-2">${{
        product.discountedPrice
    }}</span>

</template>



<style lang="scss" scoped></style>