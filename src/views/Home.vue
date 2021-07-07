<template>
  <div class="home">
    <div v-for="result in results" :key="result" class="user">
      <p>Name: {{ result.name }}</p>
      <p>Gender: {{ result.gender }}</p>
      <p>Location:{{ result.location }}</p>
      <p>Email:{{ result.email }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import fetchData from "@/composables/use-fetch";

export default defineComponent({
  setup() {
    const { getUser } = fetchData();

    return getUser;
  },
  // data() {
  //   return {
  //     results: []
  //   }
  // },
  // mounted() {
  //   fetch(`https://randomuser.me/api/`)
  //     .then((response) => response.json())
  //     .then(data => this.results = data)
  //     .catch((err) => console.error(err.message))
  // }
});
</script>