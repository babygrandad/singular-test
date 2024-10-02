import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/products" />} /> {/* Redirect to Products by default */}
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
