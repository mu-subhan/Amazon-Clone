// import { useEffect } from 'react';
// import React from 'react';
// import './App.css';
// import Header from './Header';
// import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
// import Login from './Login';
// import Home from './Home';
// import Checkout from './Checkout';
// import Footer from './Footer';
// import Navlinks from './Navlinks';
// import { auth } from './Firebase';
// import { useStateValue } from './Stateprovider';
// function App() {

// const [{loggedInUser},dispatch] =useStateValue();

// useEffect (()=>{
//   const unsubcribe =auth.onAuthStateChanged((userauth)=>{
//     if(userauth){
//       dispatch({
//         type:'SET_LOGIN',
//         user:null
//       })
//     }
//     else {
//       dispatch({
//         type:'SET_LOGIN' , 
//         user:null,
//       });
//     }
//   });
//   return ()=>{unsubcribe();
//   };
// },[]);

//   return (
//     <Router>
//     <div className="App">
//       <Header/>
//       <Navlinks/>
//       <Routes>
//         <Route path='/login' Component={Login}/>
//         <Route path='/' Component={Home}/>
//         <Route path='/checkout' Component={Checkout}/>
//       </Routes>
//       <Footer/> 
//     </div>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Navlinks from "./Navlinks";
import { auth } from "./Firebase";
import { useStateValue } from "./Stateprovider";
import { useEffect } from "react";

function App() {
  const [{ loggedInUser }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userauth) => {
      if (userauth) {
        dispatch({
          type: "SET_LOGIN",
          user: userauth,
        });
      } else {
        dispatch({
          type: "SET_LOGIN",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navlinks />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/checkout" exact Component={Checkout} />
          <Route path="/login" exact Component={Login} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
