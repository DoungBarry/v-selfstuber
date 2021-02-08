import React from 'react'
import './Banner.css'

function Banner() {

    {/* 嘗試不同用法：css 直接在html 標籤上嵌入
     ＣＳＳ名稱寫法會有所不同:blackground-size => blackgroundSize */}


  return (
   <header className="banner" style={{
    blackgrundSize: "cover", 
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
      blackgroundPosition: "center center",
        // backgroundImage: `url("https://lh3.google.com/u/0/d/1cxDRBOTttqAt86kvQ8Sb7vaQEWr_v1wh=w2880-h1304-iv1")`,
    
  }}>


    <div className="banner-content">
        <h1 className="banner-title">Native Movie</h1>
        {/* 口訣：太太喜歡用ＨＴＣ */}
      <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">List</button>
        </div>
        
        <h1 className="banner-descript">
初學開發者碰到文字排版總是非常頭疼 , 
這關係到RWD , 看起來是不是乾淨 .簡潔 , 舒服 , 大小適當
通常都習慣用 px 作為尺寸設定 . 可是當網頁面及文字非常多的時候, 需要微調會非常麻煩. 尺寸比例不是改一個數值就好. 要整體都看起來有平衡感. 
所以我會推薦使用 rem . 
因為rem 和 ％ 很像都是相對參照Root 去改變大小 . 當文字微調時只要改變Root 就可以了 . 
名稱為 ： Root + em =1 em 當父（上一層）沒有設定大小的預設是16px
文字大小通常建議設定在0.8 rem .
行距間隔 建議設定在 1 rem
</h1>
        <div className="banner--fadebutton"></div>
        
        {/* 漸層區域 ==> hover  */}

    </div>
  </header>
  )
}

export default Banner
