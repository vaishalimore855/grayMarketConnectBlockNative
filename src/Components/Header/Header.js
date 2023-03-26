import { useState, useEffect } from 'react';
import Web3 from 'web3';
import Trading from '../Pages/Trading/Trading';
import { useOnboard } from "use-onboard";

const Header = () => {

  // const [isConnected, setIsConnected] = useState(false);
  // const [ethBalance, setEthBalance] = useState("");
  // const [address, setAddress] = useState("");

  const {
    selectWallet,
    address1,
    isWalletSelected,
    disconnectWallet,
    balance
  } = useOnboard();
console.log("address1",address1)
console.log("balance",balance)
  
  return (
    <>
      {/* <Trading matic={ethBalance}></Trading> */}

      {/* <Bnb bnb={ethBalance}></Bnb> */}
      <div className="fixed-top top-header">
        <div className="topbar text-white">
          <div className="container">
            <small>Connected to BINANCE SMART CHAIN Network</small>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg py-3 py-md-4">
          <div className="container">
            <a className="navbar-brand me-0 me-md-5" href="/"><img src="images/logo.png" width="185" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0 gap-md-3 py-3 py-md-0">
                <li className="nav-item">
                  <a className="nav-a text-dark" href="Fund" style={{ textDecoration: "none" }}>Fund</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-secondary" href="TradingBot" style={{ textDecoration: "none" }}>Trading Bot</a>
                </li>
                <li className="nav-item">
                  <a className="nav-a text-dark" href="FAQ" style={{ textDecoration: "none" }}>FAQ</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <a href="#" className="btn btn-discord me-2 pt-2 bg-primary"><i className="bi bi-discord me-1"></i> Discord</a>

                <div className="app-wrapper">
                  
                  
                    <div className='connect-wallet'>
                      <a href="#" className="btn btn-secondary pt-2 " style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden", width: 150
                      }}  onClick={async () => {
                        if (isWalletSelected) disconnectWallet();
                        else await selectWallet();
                      }}>
                        Connect Wallet
                      </a>
                    </div>
                
                 
                 
                </div>
                
                
              </form>
            </div>
          </div >
        </nav >
      </div >
    </>
  );
}

export default Header