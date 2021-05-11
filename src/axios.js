import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-400c1-default-rtdb.firebaseio.com";

export default instance;