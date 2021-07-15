<template>
    <Button label="Details" @click="openModal" />
    <Dialog header="User Details" v-model:visible="displayModal" :modal="true">
        <template #subtitle>
          <img :src="users.picture.large" alt="Avatar" />
          <h2>
            {{ users.name.title }}.
            {{ users.name.first }}
            {{ users.name.last }}
          </h2>
          <p><b>Gender:</b> {{ users.gender }}</p>
          <p><b>Email:</b> {{ users.email }}</p>
          <p>
            <b>Location:</b> {{ users.location.street.number }}
            {{ users.location.street.name }},
            {{ users.location.city }},
            {{ users.location.country }}
          </p>
        </template>
        <template #footer>
          <Button label="Details" />
        </template>
      </Dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default defineComponent({
    name: 'UserCard',
    props: {
        users: {
            type: Object,
            required: true,
        }
    },
    components: { Dialog, Button },

    setup() {
      const displayModal = ref(false);

      const openModal = () =>
        displayModal.value = true;

      return { openModal, displayModal }
    }
})
</script>
