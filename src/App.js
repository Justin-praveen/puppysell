
import './App.css';
import Login from './comp/Login';
import {useSelector} from "react-redux"
import { BrowserRouter,Switch,Route} from 'react-router-dom/cjs/react-router-dom.min';
import Register from './comp/Register';
import Home from './comp/Home';
import Buy from './comp/Buy';
import Sell from './comp/Sell';

function App() {

  let hug = true;

  const sells = useSelector((state)=>state.datas);

  if(sells!==null){
    hug = false;
  }

  return (
    <>
    {
      hug ? (<BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Login/>
      </Route>
      <Route exact path="/reg">
        <Register/>
      </Route>

    </Switch>
    
    
    </BrowserRouter>
):(<BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home/>

      </Route>
     
      <Route exact path="/BUY" >
        <Buy/>

      </Route>
      <Route exact path="/Sell" >
        <Sell/>

      </Route>
      
    </Switch>
    </BrowserRouter>)
    }
    </>
  );
}

export default App;
