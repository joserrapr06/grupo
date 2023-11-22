import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Test from './pages/test';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from "react-redux";
import InicialPage from './pages/InicialPage';



function App() {
  const token = useSelector((state) => state.token);

  return (
    <Router>
        {!token && (
<Routes>

          <Route path='/home' element={<Navigate to='/' />} />
</Routes>
        )}
        {token && (

          <Routes>

            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/login' element={<Navigate to='/home' />} />
            <Route path='/register' element={<Navigate to='/home' />} />

          </Routes>
        )}
      <Routes>

        <Route exact path='/' element={<InicialPage />} />


        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/Register' element={<RegisterPage />} />


        <Route exact path='/test' element={<Test />} />


      </Routes>
    </Router>
  );
}

export default App;
