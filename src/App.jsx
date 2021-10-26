import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Global/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import Instructions from './pages/Instructions';
import { SubstrateProvider } from './services/substrate';
import { useRef } from 'react';
import Dev from './pages/Dev';
import Footer from './components/Global/Footer/Footer';
import Collections from './pages/Collections';
import Assets from './pages/Assets';
import Ownassets from './pages/OwnAssets';

const App = () => {
  const childRef = useRef();
  return (
    <SubstrateProvider>
      <Router>
        <div className='App' onClick={(e) => childRef.current.toggle(e)}>
          <Navbar ref={childRef} />
          <Switch>
            <Route exact path='/' component={() => <LandingPage />}></Route>
            <Route exact path='/instructions' component={() => <Instructions />}></Route>
            <Route exact path='/dev' component={() => <Dev />}></Route>
            <Route exact path='/collections' component={() => <Collections />}></Route>
            <Route exact path='/asset/:id' component={() => <Assets />}></Route>
            <Route exact path='/owned' component={() => <Ownassets />}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </SubstrateProvider>
  );
};

export default App;
