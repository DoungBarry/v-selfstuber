import React, { useState ,useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  // useState(initialState) 啟用  useState(false) 不啟用
  

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false)

    }
    
  }

  //for Hook need one functions , 

  //監聽器 （每次滑動都要去監聽事件

  //transitionNavBar 
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
  
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    }
  }, []);


  return (
    <div className="nav">
      <div className="nav-content">
        <img src="https://lh3.google.com/u/0/d/1p4t7Xqm9uUFPZyWeTJEexy3PQItyiII_=w2000-h1132-iv1" 
          alt=""
          className="nav-logo"></img>

    
          <img src="https://lh6.googleusercontent.com/rGzH2md5wK_qBYF5XmMmoXiFD9UU7DCDQr8WM4w7AQJnIAUvVH9tqL7NtjgKvZbxdcE5ts9q33yDiLOfNse2=w2754-h1418" alt="" className="nav-avatar">
          </img>

      </div>

    </div>
      
    
  )
}

export default Nav
