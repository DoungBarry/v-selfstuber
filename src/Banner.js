import React from 'react'
import './Banner.css'

function Banner() {

    {/* 嘗試不同用法：css 直接在html 標籤上嵌入
     ＣＳＳ名稱寫法會有所不同:blackground-size => blackgroundSize */}


  return (
   <header className="banner" style={{
    blackgrundSize: "cover", 
    backgroundImage: `url("https://lh3.google.com/u/0/d/1cxDRBOTttqAt86kvQ8Sb7vaQEWr_v1wh=w2880-h1304-iv1")`,
      blackgroundPosition: "center center",
    
  }}>


    <div className="banner-content">
        <h1 className="banner-title">Native Movie</h1>
        {/* 口訣：太太喜歡用ＨＴＣ */}
      <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">List</button>
        </div>
        
        <h1 className="banner-description">
          This is test description
</h1>
<div className="banner--fadebutton"></div>
    </div>
  </header>
  )
}

export default Banner
