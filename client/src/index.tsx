import React from 'react';
import ReactDOM from 'react-dom';

import Routes from "./routes";
import './index.css';
import TransactionProvider from "./Context/TransactionContext";
import ConnectMetaMask from "./components/ConnectMetaMask";


ReactDOM.render(
  <React.StrictMode>
      <ConnectMetaMask>
          <TransactionProvider>
              <Routes />
          </TransactionProvider>
      </ConnectMetaMask>
  </React.StrictMode>,
  document.getElementById('root')
);
