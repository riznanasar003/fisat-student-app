import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import Search from './Components/Search';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './Components/Delete';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddStudent/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/viewall' element={<ViewAll/>}/>
          
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
