import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import LoginApp from './pages/SignUp/LoginApp';
import ScrollToTop from './components/ScrollToTop';
import { Navbar,Footer} from './components';

function App() {
  return (
    <Router>
      <GlobalStyle /> 
      <ScrollToTop/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SignUp" exact component = {LoginApp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;

