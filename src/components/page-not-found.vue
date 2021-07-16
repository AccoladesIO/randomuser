<template>
    <div>
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <Button label='Go Back' class='p-button-text' @click="goBack" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import router from '@/router';
import { RouterName } from '@/enum/route-name';

export default defineComponent({
    name: 'PageNotFound',
    components: {
        Button,
    },
    setup() {
        function goBack() {
            router.push({ name: RouterName.Home });
        }
        return { goBack };
    },
})
</script>
