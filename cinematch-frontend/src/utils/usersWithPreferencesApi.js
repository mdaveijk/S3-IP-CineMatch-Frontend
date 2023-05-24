import axios from 'axios';

export default class usersWithPreferencesApi {
  async GetAll() {
    try {
      const response = await axios.get('http://localhost:8082/api/userpreferences');
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Request failed with status code ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
