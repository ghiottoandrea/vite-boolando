<script>
export default {
    name: 'productCard',
    props:{
        product: Object
    }
}
</script>

<template>

    <div class="col-4">
        <div class="card mt-3">

            <i v-if="product.isInFavorites" class="fa-solid fa-heart heart-red"></i>
            <i v-else class="fa-solid fa-heart heart"></i>

            <div class="badges">
                <span v-if="product.discount" class="discount">-{{ product.discount }}%</span>
                <span v-if="product.sostenibility" class="sostenibility">Sostenibilità</span>
            </div>

            <img class="card_top_front_image" :src="product.frontImage" alt="">
            <img class="card_top_back_image" :src="product.backImage" alt="">

            <div class="body-card">
                <span>{{ product.brand }}</span>
                <h5>{{product.name}}</h5>
                <div class="prices">
                    <div class="red-mark"><b>{{(product.price - (product.price * product.discount/100)).toFixed(2)}}$</b></div>
                    <div v-if="product.discount" class="line-throu"> {{ product.price }}$</div>
                </div>
            </div>

        </div>
    </div>

</template>

<style></style>