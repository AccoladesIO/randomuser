export default function useApi() {
  async function getUser(num: number, gen: string) {
    const response = await fetch(
      `https://randomuser.me/api/?inc=name,gender,location,number,email,picture&results=${num}&gender=${gen}&noinfo`
    )
      .then((res) => res.json())
      .then((res) => res.results);
    return response;
  }
  return { getUser };
}
