import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const getMembers = async (filter) => {
  try {
    const queryUrl = `${baseUrl}/api/members`;
    const currentToken = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };

    const response = await axios.get(queryUrl, config);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export async function saveMember(member) {
  try {
    let queryUrl = `${baseUrl}/api/members`;
    const currentToken = await getToken();
    const config = {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };

    const response = await axios.post(queryUrl, member, config);

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const getToken = async () => {
  try {
    let queryUrl = `${baseUrl}/auth`;

    const body = {
      username: username,
      password: password,
    };

    const response = await axios.post(queryUrl, body);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};
