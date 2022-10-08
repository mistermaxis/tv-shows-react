import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/show/:id' element={<Detail />}/>
    </Routes>
  );
}

export default App;
