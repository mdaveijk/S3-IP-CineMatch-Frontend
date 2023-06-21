import React from 'react';
import PotentialMatchCard from './../components/PotentialMatchCard';
import { getUsersPreferences } from '../utils/usersWithPreferencesApi';
import { getUsers } from '../utils/usersApi';

export default function PotentialMatches() {
  const userPreferences = getUsersPreferences();
  const users = getUsers();

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.displayName : '';
  };

  return (
    <>
      <h3 className="header-tagline">What other people want to watch</h3>
      <div className="row">
        {userPreferences &&
          userPreferences.map((userPref, key) => (
            <PotentialMatchCard
              key={key}
              usermovie={userPref.preferences}
              username={getUserName(userPref.userId)}
              location={userPref.location}
              picture={userPref.profilePic}
            />
          ))}
      </div>
    </>
  );
}
