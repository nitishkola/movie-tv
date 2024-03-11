import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import React from 'react';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Visitor from './Components/Visitor';
import Counsellor from './Components/Counsellor'
import Appointment from './Components/Appointment'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import ContactForm from './Components/ContactForm'
import Success from './Components/Success'
import FetchRegistrations from './Components/FetchRegistrations'
import Homepage from './Components/Homepage'
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
        <Route path="/Appointment" element={<Appointment/>}exact/>
        <Route path="/AboutUs" element={<AboutUs/>}exact/>
        <Route path="/ContactForm" element={<ContactForm/>}exact/>
        <Route path="/FetchRegistrations" element={<FetchRegistrations/>}exact/>
        <Route path="/Success" element={<Success/>}exact/>
        <Route path="/Homepage" element={<Homepage/>}exact/>

        
      </Routes>
    </main>
  </React.Fragment>
}


export default App;