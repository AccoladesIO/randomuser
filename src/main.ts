import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Input from 'primevue/inputtext';
import PrimeVue from 'primevue/config';

const app = createApp(App);
app.use(PrimeVue);
app.component('Input', Input);

createApp(App).use(router).mount("#app");
