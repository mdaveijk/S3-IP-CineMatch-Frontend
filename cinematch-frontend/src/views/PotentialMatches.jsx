import React, { useEffect, useState } from 'react';
import PotentialMatchCard from './../components/PotentialMatchCard';
import axios from 'axios';


export default function PotentialMatches() {

  //TODO potentially add this function to a seperate file in the utils folder.

  const [userPreferences, setUserPreferences] = useState([]);

  const getUserPreferences = async () => {
    const { data } = await axios.get(
      "http://localhost:8082/api/userpreferences"
    );
    const userPreferences = data;
    setUserPreferences(userPreferences);
    console.log(userPreferences);
  };

  useEffect(() => {
    getUserPreferences();
  }, []);

  return (
    <>
      <h3 className="header-tagline">What other people want to watch</h3>
      <div className="row">
        {userPreferences &&
          userPreferences.map((userPref, key) => (
            <PotentialMatchCard key={key} usermovie={userPref.preferences} username={userPref.userId} location={userPref.location} />
          ))}
        {/* <PotentialMatchCard usermovie={"movie choice"} username={"bob"} userlocation={"venlo"} />
        <PotentialMatchCard usermovie={"movie choice"} username={"alice"} userlocation={"amsterdam"} />
        <PotentialMatchCard usermovie={"movie choice"} username={"boris"} userlocation={"london"} /> */}
      </div>
    </>
  )
}