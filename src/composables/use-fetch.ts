import fetchAPI from '@/api/fetch-api-service';

const url = `https://randomuser.me/api/?`;

export default function useAPI() {
  const sendRequest = fetchAPI();

  async function get(searchParams: URLSearchParams) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    const request = new Request(`${url}${searchParams}`, options);
    const result = await sendRequest(request);
    return result.json();
  }
  return { get };
}
