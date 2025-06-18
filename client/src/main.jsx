import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.jsx';


createRoot(document.getElementById('root')).render(

 <Provider store={store}>
 <PersistGate  persistor={persistor}>
   <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
 </PersistGate>

 </Provider>

  ,
)
  
