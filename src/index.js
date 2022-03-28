import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Homepage from './pages/homePage'
import Shoppingpage from './pages/shoppingPage'
import Profile from './pages/Profile'
import Admin from './pages/admin'
import Orders from './pages/orders'
import PersonalInformation from './pages/personalInformation'
import Security from './pages/personalInformation'
import CreateAccount from './pages/createAccount'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Login" element={<Login />} />

          <Route path="Homepage" element={<Homepage />} />

          <Route path="Shoppingpage" element={<Shoppingpage />}>
            <Route path=":itemId" element={<item />} />
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select an item</p>
                </main>
              }
            />
          </Route>

          <Route path="Profile" element={<Profile />} />
          <Route path="PersonalInformation" element={<PersonalInformation />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Security" element={<Security />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="CreateAccount" element={<CreateAccount />} />

          <Route path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
