import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsers } from './usersApi';

export function getUsersPreferences() {

  const [userPreferences, setUserPreferences] = useState([]);
  const userNames = getUsers(); // Get the userNames 

  useEffect(() => {
    async function getUsersPreferences() {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const { data } = await axios.get(`${apiUrl}user-preferences-service/api/userpreferences`);
        setUserPreferences(data);
      } catch (error) {
        //handle errors
      }
    }

    getUsersPreferences();
  }, []);

  const getUserPreferencesWithName = () => {
    // find the corresponding username
    function getUserName(userNames, userId) {
      const userName = userNames.find((userName) => userName.userId === userId);
      return userName ? userName.displayName : '';
    }

    return userPreferences.map((userPref) => ({
      ...userPref,
      username: getUserName(userNames, userPref.userId),
    }));
  };

  return getUserPreferencesWithName();
}
