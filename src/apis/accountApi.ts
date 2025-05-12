import axiosClient from './axiosClient';

const accountApi = {
  validateUsername: (username: string) =>
    axiosClient.post(`/accounts/validate/username`, { value: username }),
  validatePassword: (password: string) =>
    axiosClient.post(`/accounts/validate/password`, { value: password }),
  kakaoLogin: (code: string) =>
    axiosClient.get(`/auth/kakao/callback?code=${code}`, {}),
  getKakaoKey: () => axiosClient.get(`/auth/kakao/key`, {}),
};

export default accountApi;
