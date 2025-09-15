import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col mt-5">
          <img src="Media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted">Thematic Investment platform</p>
          <img src="Media/images/zerodhaFundhouse.png" alt="" style={{marginTop:"20px", width:"50%"}}/>
          <p className="text-small text-muted">Asset Management</p>
        </div>
        <div className="col mt-5"><img src="Media/images/streakLogo.png" alt="" style={{ width:"27%"}}/>
          <p className="text-small text-muted">Algo & strategy platform</p>
          <img src="Media/images/goldenpiLogo.png" alt="" style={{marginTop:"20px", width:"40%"}}/>
          <p className="text-small text-muted">Bonds trading platform</p>
          </div>
        <div className="col mt-5"><img src="Media/images/sensibullLogo.svg" alt="" style={{width:"40%"}}/>
          <p className="text-small text-muted">Options trading platform</p>
          <img src="Media/images/dittoLogo.png" alt="" style={{marginTop:"20px", width:"30%"}}/>
          <p className="text-small text-muted">Insurance</p>
          </div>
      </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup now
        </button>
    </div>
  );
}

export default Universe;
