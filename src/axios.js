import axios from 'axios'


//responsible for which URL we are sending the request from 
const instance = axios.create({
    baseURL: 'https://mern-instagram-123.herokuapp.com/',
})

export default instance