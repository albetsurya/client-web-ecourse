const instance = require("@/libs/axios/axiosInstance");

const login = async (data) => {
  try {
    console.log("Sending request to /login");

    const response = await instance.post("/auth/login", data);
    console.log("response login received: ", response);

    return response;
  } catch (error) {
    throw error;
  }
};

const register = async (data) => {
  try {
    console.log("Sending request to /register");

    const response = await instance.post("/auth/register", data);
    console.log("response register received: ", response);

    return response;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  register,
};
