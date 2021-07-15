import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import '@/plugins/primevue';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app');
