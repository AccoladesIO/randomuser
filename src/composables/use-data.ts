import { ref } from 'vue';
import useAPI from './use-fetch';
import { Result } from '@/interface/users';

export default function useData() {
    const { get } = useAPI();
    const error = ref(false);
    const loading = ref(false);
    const quantity = ref(1);
    const gender = ref('');
    const users = ref<Result[]>();
    const searchParams = new URLSearchParams();

    async function fetchUsers() {
      searchParams.set('results', quantity.value.toString());
      searchParams.set('gender', gender.value);

      error.value = false;
      loading.value = true;

      try {
        await get(searchParams).then((data) => (users.value = data.results));
      } catch {
        error.value = true;
      } finally {
        loading.value = false;
      }
    }
    return { error, loading, fetchUsers, users, quantity, gender }; 

}