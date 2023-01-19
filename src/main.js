import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import globalComponents from '@/plugins/global.js';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(globalComponents)
  .mount('#app');
