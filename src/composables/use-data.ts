import { ref } from 'vue';
import useApi from './use-fetch';
import { Result } from '@/interface/users';

export default function useData() {
    const { call } = useApi();
    const error = ref(false);
    const loading = ref(false);
    const quantity = ref(1);
    const gender = ref('');
    const users = ref<Result[]>();

    function fetchUsers() {
      call(error, loading, quantity.value, gender.value).then((data) => (users.value = data.results));
    }

    return { error, loading, fetchUsers, users, quantity, gender }; 
}