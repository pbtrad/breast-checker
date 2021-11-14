import axios from "axios";

export default axios.create({
    // change the baseURL, depends on REST APIs url that your Server configures.
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});