
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import { HashRouter as Router, Route } from 'react-router-dom'


function App() {
  return (

    <>
      <Router>
      <Header />
        <Route component={Portfolio} exact path='/projects' />
        <Route component={About} exact path='/' />
      </Router>
      <Footer />
    </>

  );

}

export default App;
