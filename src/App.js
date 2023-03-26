import React from 'react'
import "../src/assets/css/custom.css"
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Faq from './Components/Pages/FAQ/Faq'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fund from './Components/Pages/Fund/Fund'
import TradingBot from './Components/Pages/TradingBot/TradingBot'
import Dashboard from './Components/Pages/Dashboard/Dashboard'

// import Bnb from './Components/web3/Bnb'

const App = () => {
  return (
    <div>
      {/* Routing */}
      <Router>
        <Header></Header>
       
        
        {/* <Bnb></Bnb>  */}
         <Switch>
       
          <Route path="/" exact component={Dashboard}></Route>
          <Route path="/Fund" exact component={Fund}></Route>
          <Route path="/TradingBot" component={TradingBot}></Route>
          <Route path="/FAQ" component={Faq}></Route>
         </Switch>
        <Footer></Footer>
      </Router>

    </div> 
    
    
  )
}

export default App





