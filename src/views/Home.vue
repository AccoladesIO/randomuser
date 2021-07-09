<template>
  <div class="home">
    <div>
      <h3>Random User Generator</h3>
      <div class="filters">
        <InputNumber id="horizontal" v-model="quantity" showButtons buttonLayout="horizontal"
          decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary"
          incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="1"
        />
        <br />
        <select v-model="gender" class='select'>
          <option value="">Both</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
    <p><b>Number of user(s): </b> {{ quantity }}</p>
      <Button
        label="Generate"
        v-if="!loading"
        @click.prevent="fetchUsers(quantity, gender)"
      />
    <p v-if="loading">Generating...</p>
    <p v-if="error">Error! Cannot fetch users. Please try again</p>
    <br />
    <div v-for="user in users" :key="user" class="grid-container">
      <Card class="userInfo">
        <template #header>
          <img :src="user.picture.large" alt="User Profile Picture" />
          <h2>
            {{ user.name.title }}.
            {{ user.name.first }}
            {{ user.name.last }}
          </h2>
        </template>
        <template #subtitle>
          <p><b>Gender:</b> {{ user.gender }}</p>
          <p><b>Email:</b> {{ user.email }}</p>
        </template>
        <template #footer>
          <p>
            <b>Location:</b> {{ user.location.street.number }}
            {{ user.location.street.name }}, {{ user.location.city }},
            {{ user.location.postcode }},
            {{ user.location.country }}
          </p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useApi from '@/composables/use-fetch';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import Card from 'primevue/card';

export default defineComponent({
  components: {
    Button,
    InputNumber,
    Card,
  },

  setup() {
    const error = ref(false);
    const loading = ref(false);
    const { getUser } = useApi();
    const quantity = ref(1);
    const gender = ref('');
    const users = ref();

    async function fetchUsers(num: number, gen: string) {
      loading.value = true;
      error.value = false;
      try {
        users.value = await getUser(num, gen);
      } catch {
        error.value = true;
      } finally {
        loading.value = false;
      }
    }
    return { error, loading, fetchUsers, users, quantity, gender };
  },
});
</script>

<style scoped>
.filters {
  display: inline-grid;
  max-width: 100%;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
.grid-item {
  border: 1px;
  border-radius: 3px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  text-align: center;
}
.p-button {
  margin-right: 0.5rem;
}
.select {
  height: 30px;
  border-radius: 5px;
}
.userCard {
  min-width: 10rem;
  max-width: 10rem;
  margin-bottom: 2em;
  border-radius: 5px;
  margin: 10px auto;
}
</style>
