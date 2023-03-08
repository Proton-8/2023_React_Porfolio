import './App.css';
import React, { Fragment } from 'react';
import { Navbar } from "./components/Navbar";
import { About} from "./components/About";
import { Project} from "./components/Project";
import { Contact} from "./components/Contact";
import { Footer} from "./components/Footer";
import { Services } from './components/Services';

function App() {

  return (
    <Fragment>
      <div id="showcase">   
   <Navbar/>
   <About/>
      </div>
      <div id="showcase2">
  <Services/>
  </div>
   <Project />
    <br/>
    <Contact />
    <Footer />
       </Fragment>
  );
}

export default App;
