import React from "react";

const PageOne = () => {
  return (
    <div>
      <div className="underlined-text">
        <h2>  بصمة المنصوري</h2>
        <span className="text"></span>
      </div>

      <div className="fimo">
        <div className="card1">
          <div className="image_container">
            <video controls poster="viduo/Image.jpg" id="player1">
              <source src="viduo/video.mp4" type="video/mp4" size="360" />
              <source src="viduo/video.mp4" type="video/mp4" size="480" />
            </video>
          </div>
          <div className="title">
            <span>موقع حجز كشف عن بعد</span>
          </div>
        </div>

        <div className="card1">
          <div className="image_container">
            <video controls poster="viduo/Image.jpg" id="player2">
              <source src="viduo/video3.mp4" type="video/mp4" size="360" />
              <source src="viduo/video3.mp4" type="video/mp4" size="480" />
            </video>
          </div>
          <div className="title">
            <span>معرض سيارات مرسيدس</span>
          </div>
        </div>

        <div className="card1">
          <div className="image_container">
            <video controls poster="viduo/Image.jpg" id="player3" width="97%">
              <source src="viduo/video4.mp4" type="video/mp4" size="360" />
              <source src="viduo/video4.mp4" type="video/mp4" size="480" />
            </video>
          </div>
          <div className="title">
            <span>متجر الاكتروني</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
