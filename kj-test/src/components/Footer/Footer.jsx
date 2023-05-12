import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="footer footer-padding" id="footer">
        <h3 className="heading-with-border contact">Contact us</h3>

        <div class="grid">
            <div class="item a">
                Have a project in mind? Let's make it happen
            </div>
            <div class="item b">
                22 Lawley Road, Woodstock, 7925,<br/>
                Cape Town, South Africa<br/>
                +27 21 469 1500<br/>
                <u>enquirie@kingjames.co.za</u>
            </div>
            <div class="item c">
                Terms of service<br/>
                Privacy policy<br/>
                Impressum</div>
            <div class="item d">
                Facebook<br/>
                Instagram<br/>
                Twitter
            </div>
            <div class="item e">
                Github<br/>
                Linkedin<br/>
                Teams
            </div>
            <div class="item f">
                Youtube<br/>
                Behance<br/>
                Dribbble
            </div>
            <div class="item g">
                Explore open jobs<br/><br/>
                ©2000—2022 King James Digital
            </div>
        </div>

    </div>
);

export default Footer;
