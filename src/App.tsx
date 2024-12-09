import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '@/pages/Login.tsx';
import Home from '@/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          index
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
