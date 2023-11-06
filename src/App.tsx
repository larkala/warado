import "./App.css";
import "./variables.css";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AgendaComponent from "./components/AgendaComponent/AgendaComponent";
import MainComponent from "./MainComponent";
import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="main-container">
      <HeaderComponent />
      
      <Router>
        <Routes>
          {/* <Route path="/" element={<MainComponent />} /> */}
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/agenda" element={<AgendaComponent />} />
        </Routes>
      </Router>

      {loggedIn 
      ? <MainComponent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      : <LoginComponent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      }
    </div>
  );
}

export default App;
