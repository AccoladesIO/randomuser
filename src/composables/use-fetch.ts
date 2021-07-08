export default function useApi() {
  async function getUser(num: number) {
    const response = await fetch(
      `https://randomuser.me/api/?inc=name,gender,location,number,email,picture&results=${num}&noinfo`
    )
      .then((res) => res.json())
      .then((res) => res.results);
    return response;
  }
  return { getUser };
}
