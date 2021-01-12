const axios = require('axios');
const api = axios.create({
    baseURL: 'https://swapi.dev/api/',
});

const getPeople = async (id) =>{
    const people = await api.get(`people/${id}`);
    console.log(people.data);
}

getPeople(3);