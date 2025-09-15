import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-4">
        <h1 className="border-bottom fs-2 text-center pb-3 mb-4 pt-4">
          We pioneered the discount broking model in India.
          <br />
          Now,we are Breaking ground with our technology.
        </h1>
        <div className="row p-5  text-muted fs-6" style={{ lineHeight: "1.8", fontSize:"1.2em"}}>
          <div className="col p-5">
            <p>
              We kick-started operations on the 15th of august ,2010 with the
              goal of breaking all barriers that traders and investors face in
              india in terms of cost,support,and technology.We named the company
              Zerodha ,a combination of zero and Radha,the sanskrit word for
              barrier.
            </p>
            <p>
              Today,our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1+ crore clients place millions of orders everyday through
              our powerful ecosystem of investment platforms,contributing over
              15% of all indian retail trading volumes.
            </p>
          </div>
          <div className="col p-5">
            <p>
              In addition, we run a no of popular open online education and
              community initatives to empower retail traders and investors.
            </p>
            <p>
              <a href="">Rainmatter</a>,our fintech fund and incubator, has invested in several
              fintech startups with the goal of growing the Indian capital
              markets.
            </p>
            <p>
              And yet,we are always up to something new every day Catch up on
              the latest updates on our blog or the media is the media is saying
              about us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
