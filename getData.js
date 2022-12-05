export default async function() {
  const response = await axios.get("https://dummyjson.com/users");
  const data = await response.data;
  console.log(data);
  let people = [];

  data.users.map((x) => {
    people.push({
      fullName: x.firstName + x.lastName,
      age : x.age,
      weight : x.weight,
    });
  });
  return people;
};
