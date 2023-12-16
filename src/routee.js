import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Register from "./Register";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './login';
import Count from './progams/count'
import Props from "./props";
import Additem from "./Components/Additem"
import Accordian from "./Components/Accordian";

// import './App.css';
import './routee.scss'


function routee() {
    return (
        <Router>
            {/* <h1  className="main">Routee Page</h1> */}
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/count" element={<Count/>}/>
                    <Route path="/props" element={<Props/>}/>
                    <Route path="/additem" element={<Additem/>}/>
                    <Route path="/accordian" element={<Accordian/>}/>
                </Routes>
            </div>
        </Router>

    )
}

export default routee