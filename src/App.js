import React, {Component} from 'react';
import './App.css';
import Containers from './containers/containers';
import  MenuBar  from './Layout/MenuBar';
import  Header  from './Layout/Header';
import  Content  from './Layout/Content';
import  Footer  from './Layout/Footer';
import { BrowserRouter, Route } from "react-router-dom";
import ability from './components/ability/Ability';
import education from './components/education/Education';
import training from './components/training/Training';



class App extends Component {

  render() {
    return (
      
      <BrowserRouter>
          <MenuBar></MenuBar>
        
          <Containers>
            <Header></Header>
            <Route exact path="/" component={Content} />
            <Route path="/ability" component={ability} />
            <Route path="/education" component={education} />
            <Route path="/training" component={training} />
            <Footer></Footer>
          </Containers>


      </BrowserRouter>
     
      );
  }
}


export default App;
