import { Button } from '@/components/ui/button.tsx';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';
import { useState } from 'react';

export default function SignupAccount({ onNextBtnClick } : { onNextBtnClick: () => void }) {
  const inputDescriptionExample = {
    username: '이미 존재하는 아이디입니다.',
    password: '특수문자를 1자 이상 포함해야 합니다.',
    passwordConfirm: '비밀번호가 일치하지 않습니다.'};
  const [inputDescription, setInputDescription] = useState({username: '', password: '', passwordConfirm: ''});

  const onUsernameChange = () => {
    setInputDescription(inputDescriptionExample);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center content-center">
        <div className="mt-5 text-center">
          <h1 className="text-xl font-semibold text-gray-800">
            Welcome To Dynomite!
          </h1>
        </div>

        <div className="mt-10 mb-5 w-4/5 max-w-xl m-1">
          <div className="w-full">
            <Label className="" htmlFor="username">아이디</Label>
            <Input id="username" onChange={onUsernameChange} />
            <Label className="text-red-600">{inputDescription.username}</Label>
          </div>
          <div className="w-full mt-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
            />
            <Label className="text-red-600">{inputDescription.password}</Label>
          </div>
          <div className="w-full mt-2">
            <Label htmlFor="password-confirm">비밀번호 확인</Label>
            <Input
              id="password-confirm"
              type="password"
            />
            <Label className="text-red-600">{inputDescription.passwordConfirm}</Label>
          </div>
          <Button
            className="w-full mt-7"
            onClick={onNextBtnClick}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}
