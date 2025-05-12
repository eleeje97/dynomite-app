import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label';
import { FcGoogle } from 'react-icons/fc';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import accountApi from '@/apis/accountApi.ts';
import { useEffect, useState } from 'react';

export default function Login() {
  const [kakaoKey, setKakaoKey] = useState('');

  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoKey}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    accountApi
      .getKakaoKey()
      .then((response) => {
        setKakaoKey(response.data.key);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const onKakaoLoginBtnClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onSignInBtnClick = () => {
    alert('아직 안했지롱~');
  };

  const onSignUpBtnClick = () => {
    alert('아직 안했지롱~');
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Dynomite</h1>
        <p className="text-gray-600 mt-2">오늘도 멋지게 다이노해볼까요? 🦕🧨</p>
      </div>

      {/*소셜로그인 버튼*/}
      <div className="mt-10 mb-5 w-4/5 max-w-xl m-1">
        <Button
          variant="outline"
          className="w-full max-w-xl m-1"
        >
          <FaGithub /> Login with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full max-w-xl m-1"
        >
          <FcGoogle /> Login with Google
        </Button>
        <Button
          variant="outline"
          className="w-full max-w-xl m-1"
          onClick={onKakaoLoginBtnClick}
        >
          <RiKakaoTalkFill /> Login with Kakao
        </Button>
      </div>

      {/*구분선*/}
      <div className="flex items-center w-4/5 max-w-xl m-1">
        <div className="flex-grow border-t border-border"></div>
        <span className="px-2 text-sm text-muted-foreground">
          Or Continue With
        </span>
        <div className="flex-grow border-t border-border"></div>
      </div>

      {/*자체로그인*/}
      <div className="mt-3 w-4/5 max-w-xl m-1">
        <Input
          type="text"
          placeholder="username"
          className="w-full max-w-xl m-1"
        ></Input>
        <Input
          type="password"
          placeholder="password"
          className="w-full max-w-xl m-1"
        ></Input>
        <Button
          className="w-full max-w-xl m-1 shadow-lg"
          onClick={onSignInBtnClick}
        >
          Login
        </Button>
        {/*회원가입*/}
        <div className="flex-row text-center">
          <Label>아직 회원이 아니신가요?</Label>
          <Button
            className="font-semibold"
            variant="link"
            onClick={onSignUpBtnClick}
          >
            회원가입하기
          </Button>
        </div>
      </div>
    </>
  );
}
