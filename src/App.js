import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import Category from './components/Category';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about" >
                <About />
              </Route>
              <Route path="/category" >
                <Category />
              </Route>
            </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
