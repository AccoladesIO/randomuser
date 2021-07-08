<template>
  <div class="home">
    <Input type='number' v-model="numOfUser" />
    <p><b>Number of user(s): </b> {{ numOfUser }}</p>
    <button v-if="!loading" @click.prevent="fetchUsers(numOfUser)" class="button">
      Generate
    </button>
    <p v-if="loading">Loading...</p>
    <p></p>
    <div v-for="user in users" :key="user">
      <img :src="user.picture.medium" />
      <h2>{{ user.name.title }}. 
        {{ user.name.first }} 
        {{ user.name.last }}
      </h2>
      <p><b>Gender:</b> {{ user.gender }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Location:</b> {{ user.location.street.number }}
       {{ user.location.street.name }},
       {{ user.location.city }},
       {{ user.location.postcode }},
       {{ user.location.country }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import useApi from "@/composables/use-fetch";

export default defineComponent({
  setup() {
    const error = ref(false);
    const loading = ref(false);
    const { getUser } = useApi();
    const users = ref('');
    const numOfUser = ref();

    async function fetchUsers(num: number) {
      loading.value = true;
      error.value = false;
      try {
        users.value = (await getUser(num));
      } catch {
        error.value = true;
      } finally {
        loading.value = false;
      }
    }
    return { error, loading, fetchUsers, users, numOfUser };
  },
});
</script>

<style>
button {
  cursor: pointer;
  color: #208b29;
  background-color: rgb(194, 194, 194);
  padding: 5px;
  border-radius: 3px;
}
</style>
