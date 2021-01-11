import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/azclone-1/us-central1/api  ' // The API (cloud function) URL
});

export default instance;

// upgrade to a blaze plan then hit firebase deploy --only functions then in functions section of firebase get trigger link and paste as base url