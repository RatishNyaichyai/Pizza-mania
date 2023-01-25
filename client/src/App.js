
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homescreen from './components/Homescreen';
import Topbar from './components/Topbar';
import Contactus from './components/Contactus';

function App() {
  return (
    <div className="App">
      <div className="App">
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={< Homescreen />} />
            <Route path="/contactus" element={< Contactus />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
