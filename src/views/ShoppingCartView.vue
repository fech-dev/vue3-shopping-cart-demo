<script setup>
import { useShoppingCartStore } from '@/stores/shoppingCart.js';
import { ShoppingCartItem } from '@/components';

const cartStore = useShoppingCartStore();
</script>

<template>
  <view-wrapper>
    <h1>Shopping Cart</h1>

    <div class="flex flex-col gap-5 py-10 container">
      <shopping-cart-item
        v-for="item of cartStore.items.values()"
        :item="item"
        @action:remove="cartStore.delete(item.id)"
      />
    </div>
  </view-wrapper>
</template>
