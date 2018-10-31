import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Page from './Page'

const App = () => {

  return(
      <BrowserRouter>  
        <div>
          <Page />
        </div> 
      </BrowserRouter>
    )
  }  

export default App;