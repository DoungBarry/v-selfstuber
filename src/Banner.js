import React from 'react'
import './Banner.css'

function Banner() {



function truncate (string, n ) {
   return string?.length > n ? 
   string.substr(0, n) + '...' : string ;
}

// '... ' :  表示任何字串代入 , 

//str.substr(start[, length])   
//var aString = 'Mozilla';
// console.log(aString.substr(0, 1));   // 'M'
// console.log(aString.substr(1, 0));   // ''
// console.log(aString.substr(-1, 1));  // 'a'
// console.log(aString.substr(1, -1));  // ''
// console.log(aString.substr(-3));     // 'lla'
// console.log(aString.substr(1));      // 'ozilla'
// console.log(aString.substr(-20, 2)); // 'Mo'
// console.log(aString.substr(20, 2));  // ''


    {/* 嘗試不同用法：css 直接在html 標籤上嵌入
     ＣＳＳ名稱寫法會有所不同:blackground-size => blackgroundSize */}

  return (
   <header className="banner" 
   style={{
    blackgroundSize: "cover", 
    // cover主要用於背景圖小於所在的內容，而背景圖又不適合使用repeat，此時就可以採用cover的方式，使背景圖放大至內容的大小，但此方法容易使背景圖因放大而失真。
    //https://www.kip.com.tw/modules/news/article.php?storyid=35

    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
      blackgroundPosition: "center center",
        // backgroundImage: `url("https://lh3.google.com/u/0/d/1cxDRBOTttqAt86kvQ8Sb7vaQEWr_v1wh=w2880-h1304-iv1")`,
    
  }}>


    <div className="banner-contents">
        <h1 className="banner-title">Native Movie</h1>
        {/* 口訣：太太喜歡用ＨＴＣ */}
      <div className="banner-buttons">
        <button className="banner-button">Play</button>
        <button className="banner-button">List</button>
        </div>
        
        <h1 className="banner-descript">



{truncate(
`初學開發者碰到文字排版總是非常頭疼 , 
這關係到RWD , 看起來是不是乾淨 .簡潔 , 舒服 , 大小適當
通常都習慣用 px 作為尺寸設定 . 可是當網頁面及文字非常多的時候, 需要微調會非常麻煩. 尺寸比例不是改一個數值就好. 要整體都看起來有平衡感. 
所以我會推薦使用 rem . 
因為rem 和 ％ 很像都是相對參照Root 去改變大小 . 當文字微調時只要改變Root 就可以了 . 
名稱為 ： Root + em =1 em 當父（上一層）沒有設定大小的預設是16px
文字大小通常建議設定在0.8 rem .
行距間隔 建議設定在 1 rem` , 50) } 

{/* fruncate { 字串 , 最高150個文字 }: going to ahead and say 15o is my character limit  */}
</h1>
</div>
      
        <div className="banner--fadeBottom"></div>
        
        {/* 漸層區域 ==> hover  */}

   
  </header>
  )
}

export default Banner
