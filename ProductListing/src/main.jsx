import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// import Child from './Child.jsx'
// import './index.css'
// import App from './App.jsx'
// import Context from './Context.jsx'


 createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    {/* <Context.Provider value="Deeps"> */}
       <App />

    {/* </Context.Provider> */}
    </BrowserRouter>
   
  </StrictMode>
)

