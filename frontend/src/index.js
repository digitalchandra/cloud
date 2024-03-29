import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Uploads from './compoment/Uploads';
import SecureUpload from './compoment/SecureUpload';
import {
      createBrowserRouter,
      createRoutesFromElements,
      RouterProvider,
      Route
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
      <Route path="upload" element={<Uploads/>}/> 
      <Route path="secureupload" element={<SecureUpload/>}/> 
    </Route>
   

  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

