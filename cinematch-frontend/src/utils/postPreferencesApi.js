import axios from 'axios';

export async function addPreferences(preferences) {
  try {
    await axios.post("http://localhost:8082/api/userpreferences", preferences);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
