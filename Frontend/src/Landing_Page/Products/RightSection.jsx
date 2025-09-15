import React from "react";

function RightSection({ imageURL, productName, productDesc, learnMore }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-5 mt-5">
          <h1 >{productName}</h1>
          <p>{productDesc}</p>
          <a href={learnMore}>Learn more<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col p-5">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
