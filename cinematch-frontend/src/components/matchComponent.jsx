import React, { useEffect, useState } from 'react';
import UserMatchingApiService from '../utils/UserMatchingApiService';

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
<table className='responsive-table'>
  <thead>
    <tr>
      <th>User 1</th>
      <th>User 2</th>
      <th>Matched on</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {matches.map(match => (
      <tr key={match.id}>
        <td>{match.userId1}</td>
        <td>{match.userId2}</td>
        <td>
          <ul>
            {match.matchCriteria}
          </ul>
        </td>
        <td>{match.status}</td>
        {/* Render other match details */}
      </tr>
    ))}
  </tbody>
</table>

  );
}

export default MatchComponent;
