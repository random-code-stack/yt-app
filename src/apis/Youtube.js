import axios from 'axios';

const KEY ='AIzaSyB3Yjp7HaT50jO2FK3-bx4OkZD3Z5UuyMI'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


