import React from 'react'
import { useOnboard } from "use-onboard";
import Header from '../../Header/Header';
const Onboard = () => {
  const {
    selectWallet,
    address,
    isWalletSelected,
    disconnectWallet,
    balance
  } = useOnboard();
  return (
    <div>
      <Header Address={address} Balance={balance}></Header>
      <div>
        {
          <button
            onClick={async () => {
              if (isWalletSelected) disconnectWallet();
              else await selectWallet();
            }}
          >
            {isWalletSelected ? "Disconnect" : "Connect"}
          </button>
        }
        <p>Address: {address}</p>
        <p>Balance: {balance} ETH</p>
      </div>
    </div>
  )
}

export default Onboard
