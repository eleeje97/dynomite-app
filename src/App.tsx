import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '@/pages/Login.tsx';
import Home from '@/pages/Home';
import SignUp from '@/pages/Signup';
import KakaoCallback from '@/pages/KakaoCallback.tsx';
import RegisterMembership from '@/pages/RegisterMembership.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/auth/kakao/callback"
          element={<KakaoCallback />}
        />
        <Route
          path="/membership/register"
          element={<RegisterMembership />}
        />
      </Routes>
    </>
  );
}

export default App;
