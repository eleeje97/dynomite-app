import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import accountApi from '@/apis/accountApi.ts';
import Loading from '@/components/Loading.tsx';

const KakaoCallback = () => {
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get('code');
    if (code) {
      accountApi
        .kakaoLogin(code)
        .then((response) => {
          const jwt = response.data.token;
          localStorage.setItem('token', jwt);
          setDone(true);
          setTimeout(() => navigate('/'), 300);
        })
        .catch((err) => {
          console.error('카카오 로그인 실패', err);
        });
    }
  }, [navigate]);

  return <Loading done={done} />;
};

export default KakaoCallback;
