import React from 'react';

const PageTwo = () => {
  return (
    <div>
      <div className="underlined-text">
        <h2>   مرشح لك</h2>
        <span className="text"></span>
      </div>

      <div className="fimo">
        <div className="card1">
          <div className="image_container">
            <video controls poster="/viduo/Image.jpg" id="player4"style={{ width: '100%' }}>
              <source src="/viduo/video1.mp4" type="video/mp4" size="360" />
              <source src="/viduo/video1.mp4" type="video/mp4" size="480" />
              {/* متصفح لا يدعم عنصر الفيديو */}
            </video>
          </div>
          <div className="title">
            <span>منصة تعليمية</span>
          </div>
        </div>

        <div className="card1">
          <div className="image_container">
            <video controls poster="/viduo/Image.jpg" id="player5" style={{ width: '100%' }}>
              <source src="/viduo/video2.mp4" type="video/mp4" size="360" />
              <source src="/viduo/video2.mp4" type="video/mp4" size="480" />
              {/* متصفح لا يدعم عنصر الفيديو */}
            </video>
          </div>
          <div className="title">
            <span>موقع تواصل</span>
          </div>
        </div>

        <div className="card1">
          <div className="image_container">
            <video controls poster="/viduo/Image.jpg" id="player6" style={{ width: '100%' }}>
              <source src="/viduo/video5.mp4" type="video/mp4" size="360" />
              <source src="/viduo/video5.mp4" type="video/mp4" size="480" />
              {/* متصفح لا يدعم عنصر الفيديو */}
            </video>
          </div>
          <div className="title">
            <span>موقع تحميل تطبيق</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
