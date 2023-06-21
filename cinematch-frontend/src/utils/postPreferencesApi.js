import axios from 'axios';

export async function addPreferences(preferences) {
  try {
    const apiUrl = process.env.REACT_APP_API_URL; // Access the environment variable
    await axios.post(`${apiUrl}user-preferences-service/api/userpreferences`, preferences);
    // await axios.post("http://localhost:8082/api/userpreferences", preferences);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
