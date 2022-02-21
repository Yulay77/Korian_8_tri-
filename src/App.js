import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RotateLoader from "react-spinners/RotateLoader";
import Navbar from './components/Navigation/Navbar';
import ScrollToTop from "./scroll/ScrollToTop";
import Home from "./pages/Home";
import Building from './pages/Building';
import Connexion from './pages/Connexion';
import './App.css';





function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App">
      {
        loading ? (

        <RotateLoader
        size={20}
        margin={2}
        color={"#4EAABF"}
        loading={loading}
        speedMultiplier={1}
        />
        ) 
        : ( 
      <header className="App-Header">
          <Router>
            <ScrollToTop/>
            <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/etablissement' component={Building} />
              <Route path='/connexion' component={Connexion} />
            </Switch>
          </Router> 
        </header>
        )}</div>
  );
}

export default App;
