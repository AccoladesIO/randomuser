import { Ref } from 'vue';

const url = `https://randomuser.me/api/?`;

const searchParams = new URLSearchParams();

export default function useApi() {
  async function call(error: Ref<boolean>, loading: Ref<boolean>, num: number, gen: string) {
    searchParams.set('results', num.toString());
    searchParams.set('gender', gen);
    
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    const request = new Request(`${url}${searchParams}`, options);

    error.value = false;
    loading.value = true;

    try {
      const result = await fetch(request);
      return result.json();
    } catch {
      error.value = true;
    } finally {
      loading.value = false;
    }
  }
  return { call };
}
