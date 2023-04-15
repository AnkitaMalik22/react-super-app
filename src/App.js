
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register.jsx';
import Category from './pages/Category.jsx'
import Home from './pages/Home';



function App() {
  return (
   <>
<Routes>
  <Route path="/" exact element={<Home/>} />
  <Route path="/register" exact element={<Register/>} />
  <Route path="/categories" element={<Category/>} />
</Routes>
   </>
  );
}

export default App;
