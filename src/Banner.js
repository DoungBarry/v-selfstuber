import React from 'react'
import './Banner.css'

function Banner() {

    {/* 嘗試不同用法：css 直接在html 標籤上嵌入
     ＣＳＳ名稱寫法會有所不同:blackground-size => blackgroundSize */}


  return (
   <header className="banner" style={{
    blackgrundSize: "cover", 
    backgroundImage: `url("https://lh3.google.com/u/0/d/1EjKN8YPNcVKOhula0HlgE0073HW5TgUy=w2000-h1072-iv1")`,
    blackgroundPosition:"center center" ,
  
  }}>



    <div className="banner-content">
      <h1 className="banner-title">口訣：太太喜歡用ＨＴＣ</h1>
      <div className="banner-buttons">
        <button className="banner-button"></button>
        <button className="banner-button"></button>
      </div>
    </div>
  </header>
  )
}

export default Banner
