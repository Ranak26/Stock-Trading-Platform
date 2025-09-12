import React from "react";

function Footer() {
  return (
    <div className="container border-top pt-5 mt-5">
      <div className="row  mt-5">
        <div className="col">
          <img
            src="Media/images/logo.svg"
            alt="logo"
            style={{ width: "60%" }}
          />
          <p>
            &copy; 2010-2024,Not Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <i class="fa fa-twitter mx-3" aria-hidden="true" ></i>
          <i class="fa fa-facebook-official mx-3" aria-hidden="true"></i>
          <i class="fa fa-instagram mx-3" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square mx-3" aria-hidden="true"></i>
          <i class="fa fa-telegram mx-3" aria-hidden="true"></i>

        </div>
        <div className="col">
          <p>Company</p>
          <a href="">About</a>
          <br />
          <a href="">Products</a>
          <br />
          <a href="">Pricing</a>
          <br />
          <a href="">Referral programme</a>
          <br />
          <a href="">Carrers</a>
          <br />
          <a href="">Zerodha tech</a>
          <br />
          <a href="">Press & media</a>
          <br />
          <a href="">Zerodha cares(CSR)</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="">Contact</a>
          <br />
          <a href="">Support portal</a>
          <br />
          <a href="">Z-Connect blog</a>
          <br />
          <a href="">List of charges</a>
          <br />
          <a href="">Downloads & resources</a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="">Open an account</a>
          <br />
          <a href="">Fund transfer</a>
          <br />
          <a href="">60 day challenge</a>
          <br />
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "15px" }}>
          <p>
            Zerodha Broking Ltd. Member of NSE, BSE -SEBI Regn No.: INZ000161534
            CDSL: Depository services through Zerodha Securities Pvt Ltd -SEBI
            registr Trading through Zerodha Commodities Pvt.Ltd MCX:46025 -SEBI
            Regn No.: INZ000205636 Registration address :Zerodha Broking Ltd.
            #1153/154,4th Cros School,J.P.Nagar 4th Phase
            ,Bengaluru-560078,Karnataka,India. For any complaints pertaining to
            securities broking please write to complaints@zerodha.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
