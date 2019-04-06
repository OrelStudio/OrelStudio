import React, { Component } from 'react'
import logo from '../images/logo.png'
import '../css/App.css'

// Components
import OrelStudio from '../components/OrelStudio'
import SideLogo from '../components/SideLogo'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className={'logo-contain'}>
            <SideLogo>
                {'OrelStudio'}
            </SideLogo>
        </div>
        <header>
            <OrelStudio/>
        </header>
      </div>
    )
  }
}

export default App
