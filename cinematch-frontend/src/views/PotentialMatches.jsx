import React, { useEffect, useState } from 'react';
import PotentialMatchCard from './../components/PotentialMatchCard';
import axios from 'axios';

//find the corresponding username
function getUserName(userNames, userId) {
  const userName = userNames.find((userName) => userName.userId === userId);
  return userName ? userName.displayName : '';
}

export default function PotentialMatches() {
  const [userPreferences, setUserPreferences] = useState([]);
  const [userNames, setUserNames] = useState([]);

  const getUserPreferences = async () => {
    const { data } = await axios.get("http://localhost:8082/api/userpreferences");
    const userPreferences = data;
    setUserPreferences(userPreferences);
  };

  const getUserNames = async () => {
    const { data } = await axios.get("http://localhost:8081/api/users");
    const userNames = data;
    setUserNames(userNames);
  };

  useEffect(() => {
    getUserPreferences();
    getUserNames();
  }, []);

  return (
    <>
      <h3 className="header-tagline">What other people want to watch</h3>
      <div className="row">
        {userPreferences &&
          userPreferences.map((userPref, key) => (
            <PotentialMatchCard
              key={key}
              usermovie={userPref.preferences}
              username={getUserName(userNames, userPref.userId)} // Call the getUserName function
              location={userPref.location}
            />
          ))}
      </div>
    </>
  );
}