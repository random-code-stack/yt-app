import { useState, useEffect } from "react";
import youtube from '../apis/Youtube.js';

const useVideos = (defaultSearchTerm) => {
    //initialize pieces of state, and setState
    const [videos, setVideos] = useState([])

    //says component must do something after render
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    //call back function called upon render
    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //updating pieces of state
        setVideos(response.data.items)

    };    
    //Make sure to return function outside of async callback
    //here this is the expected output, list of videos and search term
    return [videos, search];
};

export default useVideos