import { useEffect, useState } from "react";

export default function People() {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    setPeople(data);
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => {
          return <li key={person.id}>{person.name}</li>;
        })}
      </ul>
    </div>
  );
}
