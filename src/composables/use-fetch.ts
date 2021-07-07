function fetchData() {
    const getUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      return data;
    };
    getUser().then((data) => {
      console.log(data);
    });
    return { getUser };
  }
  
  export default fetchData;
  