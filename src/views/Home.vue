<template>
  <div class='p-d-flex p-jc-center'>
    <h3>Random User Generator</h3>
      <div class='p-mr-2'>
        <InputNumber id='horizontal' v-model='quantity' showButtons buttonLayout='horizontal'
        decrementButtonClass='p-button-secondary' incrementButtonClass='p-button-secondary'
        incrementButtonIcon='pi pi-plus' decrementButtonIcon='pi pi-minus' :min='1' 
        />
        <Dropdown v-model='gender' 
        :options='genders' 
        optionLabel='name' 
        optionValue='code' 
        placeholder='Select gender'
        @change='generate'
        />
      </div>
      <br />
      <Button
      label='Generate'
      v-if='!loading'
      @click.prevent='generate'
      />
  </div>
  <p v-if="loading"><ProgressSpinner style='width:40px;height:40px'
    strokeWidth='8' animationDuration='.5s'/></p>
  <p v-if='error'>
    <i class='pi pi-times-circle'></i>
    Cannot fetch users. Please try again
  </p>
  <br />
  <div v-if='users' class='p-d-flex p-jc-center'>
    <UserTable :users='users' />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import ProgressSpinner from 'primevue/progressspinner';
import UserTable from '@/components/user-table.vue';
import Dropdown from 'primevue/dropdown';
import { genders } from '@/constants/genders';
import useData from '@/composables/use-data';

export default defineComponent({
  components: {
    Button,
    InputNumber,
    ProgressSpinner,
    UserTable,
    Dropdown,
  },

  setup() {
    const { fetchUsers, loading, error, users, quantity, gender } = useData();

    function generate() {
      fetchUsers();
    }

    return { error, loading, generate, users, quantity, gender, genders };
  },
});
</script>

<style scoped>
.p-button {
  margin-right: 0.5rem;
}
</style>
