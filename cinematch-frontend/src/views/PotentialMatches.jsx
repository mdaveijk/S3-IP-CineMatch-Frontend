import React, { useEffect, useState } from 'react';
import PotentialMatchCard from './../components/PotentialMatchCard';
import { getUsersPreferences } from '../utils/usersWithPreferencesApi';

export default function PotentialMatches() {
  const userPreferences = getUsersPreferences();

  return (
    <>
      <h3 className="header-tagline">What other people want to watch</h3>
      <div className="row">
        {userPreferences &&
          userPreferences.map((userPref, key) => (
            <PotentialMatchCard
              key={key}
              usermovie={userPref.preferences}
              username={userPref.username}
              location={userPref.location}
            />
          ))}
      </div>
    </>
  );
}
