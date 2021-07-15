import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);

createApp(App).use(router).mount('#app');
