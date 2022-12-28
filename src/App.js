import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DietThin1 from './pages/DietThin/DietThin1/DietThin1';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import DietThin2 from './pages/DietThin/DietThin2/DietThin2';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/diet/thin/1' element={<DietThin1/>}/>
      <Route path='/diet/thin/2' element={<DietThin2/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
