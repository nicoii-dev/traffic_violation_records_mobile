import axios from "axios";

export const UserLogin = async (data:{email: string, password: string}) => {
  try {
    let response
    await axios
      .post('http://127.0.0.1:8000/api/login', {
        email: data.email,
        password: data.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
  } catch (error) {
    return error.response.data;
  }
};
