import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
// import { Account } from './Components/Pages/Account/Account';
import { Care } from './Components/Pages/Care/Care';
import { Consult } from './Components/Pages/Consult/Consult';
import { Doctors } from './Components/Pages/Doctors/Doctors';
import { Home } from './Components/Pages/Home/Home';
import { Login } from './Components/Pages/Account/Login';
import { Medicines } from './Components/Pages/Medicines/Medicines';
import { Register } from './Components/Pages/Account/Register';
import { Tests } from './Components/Pages/Tests/Tests';
import { Plus } from './Components/Pages/Plus/Plus';
import { RegisterDoctor } from './Components/Pages/Account/RegisterDoctor';
import { Terms } from './Components/Pages/Terms/Terms';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/doctors"} element={<Doctors/>}/>
        <Route path={"/consult"} element={<Consult/>}/>
        <Route path={"/medicines"} element={<Medicines/>}/>
        <Route path={"/care"} element={<Care/>}/>
        <Route path={"/tests"} element={<Tests/>}/>
        {/* <Route path={"/account"} element={<Account/>}/> */}
        <Route path={"/account/login"} element={<Login/>}/>
        <Route path={"/account/register"} element={<Register/>}/>
        <Route path={"/account/register_doctor"} element={<RegisterDoctor/>}/>
        <Route path={"/plus"} element={<Plus/>}/>
        <Route path={"/terms"} element={<Terms/>}/>
      </Routes>
    </div>
  );
}

export default App;
