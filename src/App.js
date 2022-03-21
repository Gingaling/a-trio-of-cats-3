import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './App.css';
import Header from './Header';
import RandomCat from './RandomCat';

function App() {
	return (
        <>
         <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
           <Route path="home" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
		<div className="container_main">
			<Header />
			<RandomCat />
		</div>
        </>
	);
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
