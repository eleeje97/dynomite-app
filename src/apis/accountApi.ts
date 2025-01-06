import axiosClient from './axiosClient';

const accountApi = {
  validateUsername: (username : string) =>
    axiosClient.post(`/accounts/validate/username`, username),
};

export default accountApi;