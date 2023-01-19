<script setup>
import { AppNavbar } from '@/components';
</script>

<template>
  <!-- Header -->
  <app-navbar />

  <suspense>
    <router-view />

    <template #fallback> Loading... </template>
  </suspense>

  <!-- Footer -->
</template>
