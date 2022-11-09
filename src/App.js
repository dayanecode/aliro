import { NormalizeStyles } from './shared/NormalizeStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Explorer } from './screens/Explorer';
import { NotFound } from './screens/NotFound';

export function App() {
  return (
    
    <>

      <NormalizeStyles />
      <BrowserRouter>
        <Routes>
        <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Home />} />
          <Route path='/explorer' element={<Explorer />} />
          <Route path='/detail' element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
