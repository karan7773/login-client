import { Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Register';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
import Dashboard from './components/Dashboard';

axios.defaults.baseURL='http://localhost:9000';
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
      <Toaster position='top-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' index element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='dashboard' element={<Dashboard/>} />

      </Routes>
    </UserContextProvider>
  );
}

export default App;
