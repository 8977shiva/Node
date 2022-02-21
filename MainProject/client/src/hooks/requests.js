import axios from "axios";
const API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await axios.get(`${API_URL}/planets`);
  // console.log(response, "l");
  return await response.data;
}

async function httpGetLaunches() {
  const response = await axios.get(`${API_URL}/launches`);
  return await response.data.sort((a, b) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch) {
  return await axios
    .post(`${API_URL}/launches`, launch)
    .then((response) => {
      if (response.status === 201) {
        return response.data;
      }
    })
    .catch((error) => {
      return false;
    });
}

async function httpAbortLaunch(id) {
  return await axios
    .post(`${API_URL}/launches/${id}`)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error) => {
      return false;
    });
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
