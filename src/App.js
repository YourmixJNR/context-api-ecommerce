import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Landing from './Pages/Landing';
import Product from './Components/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path='/:id' element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
