import React from 'react';
import './App.css';
//import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Accueil from './pages/Accueil'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/Signup'
import Layout from './components/Layout'
import NavigationBar from './components/Navbar'
import  Jumbotron  from './components/Jumbotron';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
<>
  <NavigationBar />
  <Jumbotron />
  <Layout>
  <Router>
    <Switch>
       <Route exact path="/" component= {Accueil} />
       <Route  path="/Profile" component= {Profile} />
       <Route  path="/signin" component= {Signin} />
       <Route  path="/signup" component= {SignUp} />
    </Switch>
    
    <br />
    <br />
    <Footer />
  </Router>
  </Layout>
</>
    </div>
  );
}

export default App;
