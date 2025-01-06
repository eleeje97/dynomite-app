import axiosClient from './axiosClient';

const accountApi = {
  validateUsername: (username : string) =>
    axiosClient.post(`/accounts/validate/username`, { value: username }),
  validatePassword: (password : string) =>
    axiosClient.post(`/accounts/validate/password`, { value: password }),
};

export default accountApi;