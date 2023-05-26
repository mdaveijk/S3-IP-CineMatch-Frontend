import { useEffect, useState } from 'react';
import axios from 'axios';

export function getUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const { data } = await axios.get("http://localhost:8081/api/users");
        setUsers(data);
      } catch (error) {
        // Handle error
      }
    }

    getUsers();
  }, []);

  return users;
}
