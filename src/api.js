import axios from 'axios';

let api = axios.create({
    headers : {
        "Client-ID": 'gp762nuuoqcoxypju8c569th9wz7q5',
        "Authorization": "Bearer "  + 'oqgba43p3ldn7llgzxmjodcr35f3uo'
    }
})

export default api;

