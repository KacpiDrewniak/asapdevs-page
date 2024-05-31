import React from 'react'
import Marquee from "react-fast-marquee";
function WhatWeDo5() {
  return (
    <div className="home5-process-area mb-130">
    <div className="container">
      <div className="row mb-55 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="section-title-5">
            <span>THE PROCESS</span>
            <h2>Proces działania</h2>
          </div>
          <div className="section-content">
            <p>Morbi interdum pellentesque nunc, luctusongi pretium nulla luctus at Aliquam. </p>
          </div>
        </div>
      </div>
      <div className="row g-lg-4 gy-5 justify-content-center">
        <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="single-process">
            <div className="sl">
              <h2>1</h2>
            </div>
            <div className="content">
              <h3>Analiza</h3>
              <p>
                Dogłębnie poznajemy Twoje wymagania i dostarczamy oprogramowanie, które jest idealnie dopasowane do Twoich potrzeb.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
          <div className="single-process">
            <div className="sl">
              <h2>2</h2>
            </div>
            <div className="content">
              <h3>Wycena</h3>
              <p>
                Przygotowywane są wstępne koncepcje zagospodarowania, specyfikacje i wizja. Na tym etapie podawany jest szacunkowy koszt i czas realizacji.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="single-process">
            <div className="sl">
              <h2>3</h2>
            </div>
            <div className="content">
              <h3>Tworzenie</h3>
              <p>
                Nasze oprogramowanie tworzymy przy użyciu metodyki zwinnej. Otrzymujemy regularne sprawozdania z naszej pracy. Odbywamy częste spotkania w celu weryfikacji postępów i określenia kierunku rozwoju.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="single-process">
            <div className="sl">
              <h2>4</h2>
            </div>
            <div className="content">
              <h3>Deployment & Support</h3>
              <p>
                Realizacja. Ale to nie koniec. Stale monitorujemy, wspieramy i rozwijamy nowe funkcje.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="achievement-area">
        <div className="row g-lg-4 gy-5">
          <div className="col-xl-7 col-lg-6 d-flex align-items-center wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="achievement-content">
              <h2>#1</h2>
              <h3>Best IT Agency Services And Solutions Company <span>Since <span className="year">2020.</span></span></h3>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 wow animate fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
            <div className="achievement-img magnetic-item">
              <img className="img-fluid" src="assets/img/home-5/achievement-img.png" alt="" />
            </div>
          </div>
        </div>
        <div className="achievement-text-slider ">
        <Marquee>  <h2 className="marquee_text2">Learn<span>#</span>useful information<span>#</span>from our insights<span>#</span>and<span>#</span>experience<span>#</span>together ani <span>#</span>Learn<span>#</span>useful information<span>#</span>from our insights<span>#</span>and<span>#</span>experience<span>#</span>together ani<span>#</span>Learn<span>#</span>useful information<span>#</span>from our insights<span>#</span>and<span>#</span>experience<span>#</span>together ani<span>#</span>Learn<span>#</span>useful information<span>#</span>from our insights<span>#</span>and<span>#</span>experience<span>#</span>together ani</h2> </Marquee>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhatWeDo5
