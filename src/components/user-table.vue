<template>
  <div class='user-container'>
    <DataTable
      :value='users'
      :paginator='true'
      :rows='9'
      :autoLayout='true'
      paginatorTemplate='FirstPageLink PrevPageLink PageLinks 
      NextPageLink LastPageLink CurrentPageReport'
      responsiveLayout='scroll' @page='currentPage($event)'
    >
      <Column field='picture' header=' '>
        <template #body='{ data }'>
          <img :src="data.picture.medium" />
        </template>
      </Column>
      <Column field='name.first' header='Name'>
        <template #body='{ data }'>
          {{ data.name.first }} {{ data.name.last }}
        </template>
      </Column>
      <Column field='gender' header='Gender'>
        <template #body='{ data }'>
          <Chip v-if="data.gender == 'male'" class='custom-chip-m'>Male</Chip>
          <Chip v-else class='custom-chip-f'>Female</Chip>
        </template>
      </Column>
      <Column field='email' header='Email'></Column>
      <Column field='location.country' header='Location'>
        <template #body='{ data }'>
          <i class='pi pi-map-marker' style='fontSize: 1.25rem'></i>
          {{ data.location.street.number }} {{ data.location.street.name }},
          {{ data.location.city }}, {{ data.location.state }},
          {{ data.location.country }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chip from 'primevue/chip';
import paginator from '@/composables/use-paginator';
import IUsers from '@/interface/users';
import IPages from '@/interface/page';

export default defineComponent({
  name: 'userTable',
  components: {
    DataTable,
    Column,
    Chip,
  },
  props: {
    users: {
      type: Object as PropType<IUsers>,
      required: true,
    },
  },
  setup() {
    const { onPage } = paginator();

    function currentPage(event: IPages) {
      onPage(event);
    }
    return { currentPage };
  },
});
</script>

<style>
.user-container {
  display: inline-grid;
  grid-template-columns: 75rem auto auto;
  padding: 10px;
}
img {
  border-radius: 50%;
}
.p-chip.custom-chip-m {
    background: rgb(221, 254, 255);
}
.p-chip.custom-chip-f {
    background: rgb(252, 230, 255);
}
.p-paginator {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
