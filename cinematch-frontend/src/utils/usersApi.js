import { useEffect, useState } from 'react';
import axios from 'axios';

export function getUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const { data } = await axios.get(`${apiUrl}api/users`);
        //const { data } = await axios.get("http://localhost:8080/api/users");
        setUsers(data);
        console.log("test", data);
      } catch (error) {
        // Handle error
        console.log("Something went wrong:", error);
      }
    }

    getUsers();
  }, []);

  return users;
}
