import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/products',
    name: 'products/index',
    component: () => import('@/views/products/IndexView.vue'),
  },

  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/ShoppingCartView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
