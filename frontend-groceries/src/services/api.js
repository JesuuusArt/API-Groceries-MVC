import axios from 'axios';

// Crea una instancia de Axios con la URL base de tu backend
const api = axios.create({
    baseURL: 'http://localhost:3000', // Asegúrate de que coincida con el puerto de tu backend
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;