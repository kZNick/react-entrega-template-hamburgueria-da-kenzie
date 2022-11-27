import axios from "axios"; 

export const apiBuguer = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 8000

})