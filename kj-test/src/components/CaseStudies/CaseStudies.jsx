import React from 'react';
import ImageCard1 from '../../assets/ImageCard-1.png';
import ImageCard2 from '../../assets/ImageCard-2.png';
import ImageCard3 from '../../assets/ImageCard-3.png';
import './CaseStudies.css';



const CaseStudies = () => (
  <div className="devices section-padding" id="devices">
    <h3 className="heading-with-border">Case Studies</h3>






<div class="image-grid">
    <div class="card">
    <img src="https://d2vcaowhp5v7jq.cloudfront.net/olympian.jpeg" alt="Olympian" />

        <div class="text">
            <h3 class="withBorder">The Olympian</h3>
            <p>The only athlete in the world to do her Olympic routine in 2020.</p>
        </div>
    </div>
    <div class="card">
    <img src="https://d2vcaowhp5v7jq.cloudfront.net/dragon.jpeg" alt="Olympian" />

        <div class="text">
            <h3 class="withBorder">The Savings Jar</h3>
            <p>Grow your savings treasure and grow your dragon.</p>
        </div>
    </div>
    <div class="card">
    <img src="https://d2vcaowhp5v7jq.cloudfront.net/skhokho.jpeg" alt="Olympian" />

        <div class="text">
            <h3 class="withBorder">Skhokho seMali</h3>
            <p>Helping South Africans become #CashCleva with Skhokho and TymeBank.</p>
        </div>
  </div>
</div>

    <h3 className="heading-with-border brands">You’ll be in good company</h3>
    <h1 className="Brands-1">Trusted by leading brands</h1>



  </div>
);


export default CaseStudies;
