<script setup>
import { computed } from 'vue';

const props = defineProps({
  item: { type: Object, required: true },
});

const emit = defineEmits('action:remove');

const itemTotal = computed(() => props.item.quantity * props.item.unitPrice);
</script>

<template>
  <div class="py-5 px-8 shadow rounded bg-base-200 flex items-center">
    <figure class="basis-1/4">
      <img src="https://placeimg.com/400/225/arch" alt="" />
    </figure>
    <div class="flex-1 px-5">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>

      <div>Quantity: {{ item.quantity }}</div>
      <div>Unit price: {{ item.unitPrice }}</div>
      <div>Total: {{ itemTotal }}</div>
    </div>

    <div>
      <button class="btn btn-error btn-sm" @click="emit('action:remove', item)">
        Remove
      </button>
    </div>
  </div>
</template>
