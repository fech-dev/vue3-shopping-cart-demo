<script setup>
import { ShoppingCartItem } from '@/components/navbar';
</script>

<template>
  <div class="navbar bg-base-200 justify-between">
    <div>
      <a class="btn btn-ghost normal-case text-xl">Shop</a>
    </div>

    <div class="flex gap-3">
      <router-link class="btn btn-ghost" to="/products">Products</router-link>
    </div>

    <div class="flex gap-3">
      <shopping-cart-item />
    </div>
  </div>
</template>
