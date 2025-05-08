import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import accountApi from '@/apis/accountApi.ts';

const KakaoCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      accountApi
        .kakaoLogin(code)
        .then((response) => {
          const jwt = response.data.token;
          localStorage.setItem('token', jwt);
          navigate('/');
        })
        .catch((err) => {
          console.error('로그인 실패', err);
        });
    }
  }, []);

  return <div>Login Processing</div>;
};

export default KakaoCallback;
