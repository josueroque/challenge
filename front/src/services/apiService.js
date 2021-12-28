import axios from "axios";
const baseUrl = "http://localhost:8081/";
const username = "sarah";
const password = "connor";
//axios.defaults.headers.common = { Authorization: `Bearer ${tempToken}` };

export async function getMembers(filter, token) {
  //let queryUrl = baseUrl}characters?apikey=${apiKey}&hash=${hash}&ts=${ts}&limit=50`;
  try {
    console.log("desde service2");
    let queryUrl = `${baseUrl}api/members`;
    let currentToken = await getToken();
    let config = {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };
    console.log(queryUrl);
    console.log(config);
    const response = await axios.get(queryUrl, config);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function saveMember(member, token) {
  try {
    let queryUrl = `${baseUrl}/api/members`;
    const config = {
      headers: {
        "x-access-token": `${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const response = await axios.post(queryUrl, member, config);
    return response;
  } catch (error) {
    throw error;
  }
}

const getToken = async () => {
  try {
    let queryUrl = `${baseUrl}auth`;

    const body = {
      username: username,
      password: password,
    };

    const response = await axios.post(queryUrl, body);
    console.log(response.data.token);
    return response.data.token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
