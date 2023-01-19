<script setup>
defineProps({
  product: { type: Object, required: true },
});

const emit = defineEmits(['action:add-to-cart', 'action:read-more']);
</script>

<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://placeimg.com/400/225/arch"
        alt="Shoes"
        class="w-[400px] h-[225px]"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>

      <div class="card-actions justify-end">
        <div class="btn-group">
          <button
            class="btn btn-primary btn-sm"
            @click="emit('action:add-to-cart', product)"
          >
            Add to Cart
          </button>
          <button
            class="btn btn-secondary btn-sm"
            @click="emit('action:read-more', product)"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
