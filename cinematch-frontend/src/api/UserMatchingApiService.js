import axios from 'axios';

const ApiService = {
  getMatches: () => {
    return axios.get('http://localhost:8083/api/matches');
  },
//   createMatch: (data) => {
//     return axios.post('http://localhost:8080/api/Matchs', data);
//   },
//   updateMatch: (id, data) => {
//     return axios.put(`http://localhost:8083/api/Matchs/${id}`, data);
//   },
//   deleteMatch: (id) => {
//     return axios.delete(`http://localhost:8083/api/Matchs/${id}`);
//   }
};

export default ApiService;
