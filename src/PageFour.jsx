import React from 'react';

const PageFour = () => {
  return (
    <div>
      <div className="underlined-text">
        <h2> من المنصوري</h2>
        <span className="text"></span>
      </div>

      <div className="fimo" style={{ alignItems: 'stretch' }}>
        <div className="card1">
          <div className="image_container">
            <video controls poster="./viduo/Image.jpg" id="player7">
              <source src="./viduo/video7.mp4" type="video/mp4" size="360" />
              <source src="./viduo/video7.mp4" type="video/mp4" size="480" />
              {/* Fallback for browsers that don't support the <video> element */}
            </video>
          </div>
          <div className="title">
            <span>موقع ادارة سوبرمركة</span>
          </div>
        </div>

        <div className="card1">
          <div className="image_container">
            <img src="./viduo/Library.png" alt="" style={{ width: '100%' }} />
          </div>
          <div className="title">
            <span>
              مكتبه لبيع وقرائة الكتب{' '}
              <a href="https://al-mansouri-library.vercel.app" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-google"></i>
              </a>
            </span>
            <br />
          </div>
          <div className="card1">
  <div className="image_container">
    <img src="./viduo/store.png" alt="" style={{ width: '100%' }} />
  </div>
  <div className="title">
    <span>
      متجر لبيع الملابس{' '}
      <a href="https://mansouri-store.vercel.app" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-google"></i>
      </a>{' '}
    </span>
    <br />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default PageFour;
