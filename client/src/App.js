import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Test from './pages/test';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from "react-redux";
import InicialPage from './pages/InicialPage';
import Navbar from './components/Home/Navbar/Navbar';
import Carrusel from './components/Home/Inventario/Carrusel';
import Leads from './components/Home/Leads/Leads';



function App() {
  const token = useSelector((state) => state.token);

  return (
    <Router>
      {!token && (
        <Routes>

          <Route path='/home' element={<Navigate to='/' />} />
          <Route path='/home/:clientId' element={<Navigate to='/' />} />


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
        <Route exact path='/Register' element={<RegisterPage />} />


        <Route  path='/test' element={<Test />} />


      <Route path="/home" element={<Home />}>
           <Route index element={<Carrusel />} /> 
          <Route path="inventario" element={<Carrusel/>} />
          <Route path="leads" element={<Leads/>} />

          <Route path="leads/:clientId" element={<Leads/>} />
          <Route path="leads/client/:clientId" element={<Leads/>} />



          <Route path="mi sitio" element={<RegisterPage />} />
          <Route path="mi sitio" element={<InicialPage />} />
  



        </Route>





      </Routes>
    </Router>
  );
}

export default App;
