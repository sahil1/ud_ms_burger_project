import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-project-50eb0.firebaseio.com/',
});

export default instance;
