import React from "react"
import Catalog from './components/Catalog'
import Booking from './components/Booking'
import Order from './components/Order'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalog' component={Catalog} />
          <Route path='/booking' component={Booking} />
          <Route path='/order' component={Order} />
        </Switch>
        <Contact />
      </Router>
    </div>
  )
}


export default App

