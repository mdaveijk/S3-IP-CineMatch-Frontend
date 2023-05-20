import React, { useEffect, useState } from 'react';
import UserMatchingApiService from '../api/UserMatchingApiService';

function MatchComponent() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch matches when the component mounts
    fetchMatches();
  }, []);

  const fetchMatches = () => {
    UserMatchingApiService.getMatches()
      .then(response => {
        // Update the state with the received data
        setMatches(response.data);
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div>
      {matches.map(match => (
        <div key={match.id}>
          <p>{match.userId1}</p>
          <p>{match.userId2}</p>
          <ul>
          {match.matchCriteria}
        </ul>
          <p>{match.status}</p>
          {/* Render other match details */}
        </div>
      ))}
    </div>
  );
}

export default MatchComponent;
