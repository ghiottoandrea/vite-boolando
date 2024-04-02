<script>
import productCard from './productCard.vue';
import modalComponent from './modalComponent.vue';
//import { products } from '../data.js';

import { state } from '../state.js';
import axios from 'axios';

export default {
    name: `AppMain`,
    components: {
        productCard,
        modalComponent
    },
    data() {
        return {
            products: [],
            state,
            modalOpened: false,
            modalProduct: ''
        }
    },
    methods: {
        showModal(product) {
            this.modalOpened = true;

            this.modalProduct = product;
        }
    },
    mounted() {
        axios.get('http://localhost:3000/products')
            .then(response => {
                console.log(response)
                this.products = response.data
            })
    }
}
</script>

<template>

    <main>
        <div class="container">
            <div class="row">

                <productCard :product="product" :key="product.id" v-for="product in products" @showModal="showModal" />

                <div v-if="modalOpened" class="my-modal">
                    <modalComponent :product="modalProduct" />

                </div>
            </div>
        </div>
    </main>

</template>

<style>
img {
    max-width: 100%;

}
</style>