<template>
    <div>
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <Button @click="goBack">Go back</Button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import router from '@/router';

export default defineComponent({
    name: 'PageNotFound',
    components: {
        Button,
    },
    setup() {
        function goBack() {
            router.go(-1);
        }
        return { goBack };
    },
})
</script>
