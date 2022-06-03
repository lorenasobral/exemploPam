import axios from "axios";

const api = axios.create({
        baseURL: 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL' 
});
export default api;

 //https://viacep.com.br/