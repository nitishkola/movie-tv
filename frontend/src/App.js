import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Visitor from './Components/Visitor'
import Counsellor from './Components/Counsellor'
import Home from './Components/Home'
import ContactForm from './Components/ContactForm'
import FetchRegistrations from './Components/FetchRegistrations';
import AboutUs from './Components/AboutUs';



function App()
{
  return <React.Fragment>
    <Header>
      <Header/>
    </Header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/SignUp" element={<SignUp/>}exact/>
        <Route path="/SignIn" element={<SignIn/>}exact/>
        <Route path="/Visitor" element={<Visitor/>}exact/>
        <Route path="/Counsellor" element={<Counsellor/>}exact/>
        <Route path="/ContactForm" element={<ContactForm/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/AboutUs" element={<AboutUs/>}exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;