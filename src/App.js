
import './App.css';

import RestaurantList from './Components/Props/RestaurantList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FoodItems from './Components/Props/FoodItems';


function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RestaurantList />}></Route>
        <Route path='fooditems' element={<FoodItems/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
