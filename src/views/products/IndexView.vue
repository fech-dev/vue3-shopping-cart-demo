<script setup>
import { ref } from 'vue';
import * as api from '@/services/api';
import { useShoppingCartStore } from '@/stores/shoppingCart.js';
import { ProductCard } from '@/components';

const products = ref(await api.products.get());
const cartStore = useShoppingCartStore();
</script>

<template>
  <view-wrapper>
    <h1>Products</h1>

    <div class="container py-8 grid grid-cols-2 gap-5">
      <product-card
        v-for="product of products"
        :key="product.id"
        :product="product"
        @action:add-to-cart="cartStore.add(product)"
      />
    </div>
  </view-wrapper>
</template>
