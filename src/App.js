import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Timeline from './pages/Timeline';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter >
      <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/timeline' element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
