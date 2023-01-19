import { defineStore } from 'pinia';

export const useShoppingCartStore = defineStore('shopping-cart', {
  state: () => ({
    items: new Map(),
  }),
  getters: {
    itemsCount() {
      return Array.from(this.items.values()).reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
    subtotal() {
      const subtotal = Array.from(this.items.values()).reduce(
        (sum, item) => sum + item.unitPrice * item.quantity,
        0
      );

      return subtotal.toFixed(2);
    },
  },
  actions: {
    add(product) {
      const item = this.items.get(product.id) || {
        id: product.id,
        name: product.name,
        description: product.description,
        unitPrice: product.unitPrice,
        quantity: 0,
      };

      item.quantity += 1;

      this.items.set(product.id, item);
    },
    remove(productId) {
      this.items.delete(productId);
    },
  },
});
