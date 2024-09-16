
import './App.css';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  
  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={Home}>

        </Route>
      </Routes>
    </HashRouter>
    
  );
}

export default App;
