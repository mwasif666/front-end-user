import React from "react";
import "../AllCategory/AllCategories.css";

const VideoDrone = () => {
  return (
    <>
      <div className="custom-video custom-video-template--16808530575595__custom-video">
        <video className="img-fluid" autoPlay loop muted>
          <source
            src="https://cdn.shopify.com/s/files/1/0605/3154/0203/files/video.webm?v=1647413282"
            type="video/webm"
          />
          <source
            src="https://cdn.shopify.com/s/files/1/0605/3154/0203/files/video.mp4?v=1647415286"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="custom-video-content">
          <h2 style={{ color: "#ffffff" }}>
            <span>ADVANCE</span>
            <span>COMMUNICATION</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default VideoDrone;
