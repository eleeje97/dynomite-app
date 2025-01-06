import { useState } from 'react';
import SignupAccount from '@/pages/SignupAccount.tsx';
import SignupInfo from '@/pages/SignupInfo.tsx';

export default function SignUp() {
  const [SignupComponent, setSignupComponent] = useState(() => SignupAccount);
  const showNextSignupComponent = () => {
    setSignupComponent(() => SignupInfo);
  };
  return (
    <>
      <div className="min-h-screen grid place-items-center">
        <SignupComponent showNextSignupComponent={showNextSignupComponent} />
      </div>
    </>
  );
}
