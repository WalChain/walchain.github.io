import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Instructions from './pages/Instructions';
import { SubstrateProvider } from './services/substrate';
import { useRef } from 'react';

const App = () => {
  const childRef = useRef();
  return (
    <SubstrateProvider>
      <Router>
        <div className='App' onClick={(e) => childRef.current.toggle(e)}>
          <Navbar ref={childRef} />
          <Switch>
            <Route exact path='/' component={() => <LandingPage />}></Route>
            <Route
              exact
              path='/instructions'
              component={() => <Instructions />}
            ></Route>
          </Switch>
        </div>
      </Router>
    </SubstrateProvider>
  );
};

export default App;
