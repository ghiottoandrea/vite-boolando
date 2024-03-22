<script>
import productCard from './productCard.vue';
import { products } from '../data.js';

export default {
    name: `AppMain`,
    components: {
        productCard
    },
    data() {
        return {
            products
        }
    }
}
</script>

<template>

    <main>
        <div class="container">
            <div class="row">

                <productCard :product="product" :key="product.id" v-for="product in products" />


            </div>
        </div>
    </main>

</template>

<style>
img {
    max-width: 100%;

}
</style>