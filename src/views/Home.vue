<template>
  <div class="p-d-flex p-jc-center">
    <h3>Random User Generator</h3>
    <div class="p-mr-2">
      <InputNumber id="horizontal" v-model="quantity" showButtons buttonLayout="horizontal"
      decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary"
      incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" :min="1" 
      />
      <MultiSelect v-model="gender" :options="genders" optionLabel="name" placeholder="Select gender"/>
    </div>
    <br />
    <Button
    label="Generate"
    v-if="!loading"
    @click.prevent="fetchUsers(quantity, gender)"
    />
  </div>
  <p v-if="loading"><ProgressSpinner style="width:70px;height:70px" 
    strokeWidth="8" animationDuration=".5s"/></p>
  <p v-if="error">Cannot fetch users. Please try again</p>
  <br />
  <div v-if="users" class="p-d-flex p-jc-center">
    <UserTable :users="users" v-if="!loading" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useApi from '@/composables/use-fetch';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import ProgressSpinner from 'primevue/progressspinner';
import UserTable from '@/components/user-table.vue';
import MultiSelect from 'primevue/multiselect';

export default defineComponent({
  components: {
    Button,
    InputNumber,
    ProgressSpinner,
    UserTable,
    MultiSelect,
  },

  setup() {
    const { getUser } = useApi();

    const genders = ref([
      {name: 'Male', code: 'male'},
      {name: 'Female', code: 'female'},
    ]);
    const error = ref(false);
    const loading = ref(false);
    const quantity = ref(1);
    const gender = ref();
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
    return { error, loading, fetchUsers, users, quantity, gender, genders };
  },
});
</script>

<style scoped>
.filters{
  display: inline-grid;
  margin: 2rem;
}
.p-button {
  margin-right: 0.5rem;
}
.select {
  height: 40px;
  border-radius: 5px;
}
</style>
