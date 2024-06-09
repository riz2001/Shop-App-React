import logo from './logo.svg';
import './App.css';

import AddProducts from './components/AddProducts';
import DeleteProduct from './components/DeleteProduct';
import SearchProduct from './components/SearchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path='/' element={<AddProducts/>}/>
    <Route path='/search' element={<SearchProduct/>}/>
    <Route path='/delete' element={<DeleteProduct/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
