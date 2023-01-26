
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homescreen from './components/Homescreen';
import Topbar from './components/Topbar';
import Contactus from './components/Contactus';
import Register from './screens/Register';
import Login from './screens/Login';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={< Homescreen />} />
            <Route path="/contactus" element={< Contactus />} />
            <Route path="/register" element={< Register />} />
            <Route path="/login" element={< Login />} />
            <Route path="/cart" element={< CartScreen />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
