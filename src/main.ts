import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);

createApp(App).use(router).mount('#app');
