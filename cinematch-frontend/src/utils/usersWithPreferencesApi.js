import { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsers } from './usersApi';

export function getUsersPreferences() {

  const [userPreferences, setUserPreferences] = useState([]);
  const userNames = getUsers(); 

  useEffect(() => {
    async function getUsersPreferences() {
      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        const { data } = await axios.get(`${apiUrl}api/userpreferences`);
        setUserPreferences(data);
        console.log("test", data);
      } catch (error) {
        //handle errors
        console.log("some error", error);
      }
    }

    getUsersPreferences();
  }, []);

  const getUserPreferencesWithName = () => {
    // find the corresponding displayname
    function getDisplayName(userNames, userId) {
      const userName = userNames.find((userName) => userName.userId === userId);
      return userName ? userName.displayName : '';
    }

    return userPreferences.map((userPref) => ({
      ...userPref,
      username: getDisplayName(userNames, userPref.userId),
    }));
  };

  return getUserPreferencesWithName();
}
