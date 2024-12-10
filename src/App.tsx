import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '@/pages/Login.tsx';
import Home from '@/pages/Home';
import SignUp from '@/pages/Signup';

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
      </Routes>
    </>
  );
}

export default App;
