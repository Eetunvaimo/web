# Webmylly



@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

body {
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0;
    text-align: center;
    -webkit-user-select: none; /* Chrome, Safari, Opera */
    -moz-user-select: none;    /* Firefox */
    -ms-user-select: none;     /* IE/Edge */
    user-select: none;         /* Moderni tuki */

}

h2 {
    color: rgb(218,165,32, 0.7);
    top: 68rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 600;
    font-size: 2.5rem;
}

a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    
}

a:link a:visited {
    color: rgba(255, 255, 255, 0.767);
}

a:hover {
    color: rgba(131, 131, 131, 0.6);
}

footer {
    color: white;
    top: 76rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
}

/* Remove footer-links styles */
.footer-links {
        display: none;
}

h1 {
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 5rem; 
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: rgba(218,165,32, 0.7);

}

p {
    font-family: "Dancing Script", cursive;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-size: 1.7rem; 
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: rgb(255,255,255,0.863);
}

a {
    cursor: pointer;
}
a:hover {
    text-decoration: none;
}

.cursor,
.cursor2,
.cursor3{
position: fixed;
border-radius: 50%; 
transform: translateX(-50%) translateY(-50%);
pointer-events: none;
left: -100px;
top: 50%;
mix-blend-mode: difference;
-webkit-transition: all 300ms linear;
transition: all 300ms linear;
}
.cursor{
background-color: #fff;
height: 0;
width: 0;
z-index: 99999;
}
.cursor2,.cursor3{
height: 36px;
width: 36px;
z-index:99998;
-webkit-transition:all 0.3s ease-out;
transition:all 0.3s ease-out
}
.cursor2.hover,
.cursor3.hover{
-webkit-transform:scale(2) translateX(-25%) translateY(-25%);
transform:scale(2) translateX(-25%) translateY(-25%);
border:none
}
.cursor2{
border: 2px solid #fff;
box-shadow: 0 0 22px rgba(218,165,32, 0.7);
}
.cursor2.hover{
background: rgba(255,255,255,1);
box-shadow: 0 0 12px rgba(255, 255, 255, 0.2);
}

@media screen and (max-width: 980px){
.cursor,.cursor2,.cursor3{
    display: none
}
}



/* #Navigation
================================================== */

.cd-header{
    position: absolute;
    width:100%;
    top:0;
    left:0;
    z-index:100;
} 
.nav-but-wrap{ 
    position: absolute;
    display: inline-block;
    float: right;
    padding-left: 43%;
    padding-top: 20px;
    margin-top: 26px;
    transition : all 0.3s ease-out;
}
.menu-icon {
    height: 30px;
    width: 30px;
    position: relative;
    z-index: 2;
    cursor: pointer;
    display: block;
}
.menu-icon__line {
    height: 2px;
    width: 30px;
    display: block;
    background-color: rgb(255, 255, 255, 0.8);
    margin-bottom: 7px;
    cursor: pointer;
    -webkit-transition: background-color .5s ease, -webkit-transform .2s ease;
    transition: background-color .5s ease, -webkit-transform .2s ease;
    transition: transform .2s ease, background-color .5s ease;
    transition: transform .2s ease, background-color .5s ease, -webkit-transform .2s ease;
}
.menu-icon__line-left {
    width: 16.5px;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.menu-icon__line-right {
    width: 16.5px;
    float: right;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    -ms-transition: all 200ms linear;
    transition: all 200ms linear;
}
.menu-icon:hover .menu-icon__line-left,
.menu-icon:hover .menu-icon__line-right {
    width: 30px;
}
.nav {
    position: fixed;
    z-index: 98;
}
.nav:before, .nav:after {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    border-bottom-left-radius: 200%;
    z-index: -1;
    -webkit-transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    transition: transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, -webkit-transform cubic-bezier(0.77, 0, 0.175, 1) 0.6s, border-radius linear 0.8s;
    -webkit-transform: translateX(100%) translateY(-100%);
            transform: translateX(100%) translateY(-100%);
}
.nav:after {
    background: rgb(0, 0, 0, 0.8);
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
}
.nav:before {
    -webkit-transition-delay: .2s;
            transition-delay: .2s;
}
.nav__content {
    position: fixed;
    visibility: hidden;
    top: 50%;
    margin-top: 20px;
    -webkit-transform: translate(0%, -50%);
            transform: translate(0%, -50%);
    width: 100%;
    text-align: center;
}
.nav__list {
    position: relative;
    padding: 0;
    margin: 0;
    z-index: 2;
}
.nav__list-item {
    position: relative;
    display: block;
    -webkit-transition-delay: 0.8s;
            transition-delay: 0.8s;
    opacity: 0;
    text-align: center;
    color: #fff;
    overflow: hidden; 
    font-family: 'Cormorant Upright', serif;
    font-size: 5vh;
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: 3px;
    -webkit-transform: translate(100px, 0%);
            transform: translate(100px, 0%);
    -webkit-transition: opacity .2s ease, -webkit-transform .3s ease;
    transition: opacity .2s ease, -webkit-transform .3s ease;
    transition: opacity .2s ease, transform .3s ease;
    transition: opacity .2s ease, transform .3s ease, -webkit-transform .3s ease;
    margin-top: 0;
    margin-bottom: 0;
}
.nav__list-item a{ 
    position: relative;
    text-decoration: none;
    color: rgba(255,255,255,0.6);
    overflow: hidden; 
    cursor: pointer;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: 900;
    z-index: 2;
    display: inline-block;
    text-transform: uppercase;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear; 
}
.nav__list-item a:after{ 
    position: absolute;
    content: '';
    top: 50%;
    margin-top: -2px;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 0;
    background-color: rgb(218,165,32, 0.4);
    z-index: 1;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear; 
}
.nav__list-item a:hover:after{ 
    height: 4px;
    opacity: 1;
    left: 0;
    width: 100%;
}
.nav__list-item a:hover{
    color: rgba(255,255,255,1);
}
.nav__list-item.active-nav a{
    color: rgba(255,255,255,1);
}
.nav__list-item.active-nav a:after{ 
    height: 4px;
    opacity: 1;
    left: 0;
    width: 100%;
}
body.nav-active .nav__content {
    visibility: visible;
}
body.nav-active .menu-icon__line {
    background-color: #fff;
    -webkit-transform: translate(0px, 0px) rotate(-45deg);
            transform: translate(0px, 0px) rotate(-45deg);
}
body.nav-active .menu-icon__line-left {
    width: 15px;
    -webkit-transform: translate(2px, 4px) rotate(45deg);
            transform: translate(2px, 4px) rotate(45deg);
}
body.nav-active .menu-icon__line-right {
    width: 15px;
    float: right;
    -webkit-transform: translate(-3px, -3.5px) rotate(45deg);
            transform: translate(-3px, -3.5px) rotate(45deg);
}
body.nav-active .menu-icon:hover .menu-icon__line-left,
body.nav-active .menu-icon:hover .menu-icon__line-right {
    width: 15px;
}
body.nav-active .nav {
    visibility: visible;
}
body.nav-active .nav:before, body.nav-active .nav:after {
    -webkit-transform: translateX(0%) translateY(0%);
            transform: translateX(0%) translateY(0%);
    border-radius: 0;
}
body.nav-active .nav:after {
    -webkit-transition-delay: .1s;
            transition-delay: .1s;
}
body.nav-active .nav:before {
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
}
body.nav-active .nav__list-item {
    opacity: 1;
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
    -webkit-transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
    transition: opacity .3s ease, color .3s ease, -webkit-transform .3s ease;
    transition: opacity .3s ease, transform .3s ease, color .3s ease;
    transition: opacity .3s ease, transform .3s ease, color .3s ease, -webkit-transform .3s ease;
}
body.nav-active .nav__list-item:nth-child(0) {
    -webkit-transition-delay: 0.7s;
            transition-delay: 0.7s;
}
body.nav-active .nav__list-item:nth-child(1) {
    -webkit-transition-delay: 0.8s;
            transition-delay: 0.8s;
}
body.nav-active .nav__list-item:nth-child(2) {
    -webkit-transition-delay: 0.9s;
            transition-delay: 0.9s;
}
body.nav-active .nav__list-item:nth-child(3) {
    -webkit-transition-delay: 1s;
            transition-delay: 1s;
}
body.nav-active .nav__list-item:nth-child(4) {
    -webkit-transition-delay: 1.1s;
            transition-delay: 1.1s;
}
body.nav-active .nav__list-item:nth-child(5) {
    -webkit-transition-delay: 1.2s;
            transition-delay: 1.2s;
}
body.nav-active .nav__list-item:nth-child(6) {
    -webkit-transition-delay: 1.3s;
            transition-delay: 1.3s;
}
body.nav-active .nav__list-item:nth-child(7) {
    -webkit-transition-delay: 1.4s;
            transition-delay: 1.4s;
}
body.nav-active .nav__list-item:nth-child(8) {
    -webkit-transition-delay: 1.5s;
            transition-delay: 1.5s;
}
body.nav-active .nav__list-item:nth-child(9) {
    -webkit-transition-delay: 1.6s;
            transition-delay: 1.6s;
}
body.nav-active .nav__list-item:nth-child(10) {
    -webkit-transition-delay: 1.7s;
            transition-delay: 1.7s;
}

.switch-wrap {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
    transform: translateY(-50%);
    width: 100%;
    -webkit-transition: all 500ms linear;
    transition: all 500ms linear; 
    margin: 0 auto;
    text-align: center;
}
.switch-wrap h1 {
    font-weight: 900;
    font-size: 46px;
    line-height: 1;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear; 
}
@media screen and (max-width: 580px){
    .switch-wrap h1 {
    font-size: 32px;
    }
}
.switch-wrap p {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1;
    color: #8167a9;
    text-align: center;
    margin-top: 15px;
}
.switch-wrap p span {
    position: relative;
}
.switch-wrap p span:before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #fff;
    left: 0;
    bottom: -4px;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear; 
}
.switch-wrap p span:nth-child(2):before {
    opacity: 0;
}
#switch,
#circle {
    cursor: pointer;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear; 
} 
#switch {
    width: 60px;
    height: 8px;
    margin: 0 auto;
    text-align: center;
    border: 2px solid #000;
    border-radius: 27px;
    background: #8167a9;
    position: relative;
    display: inline-block;
}
#circle {
    position: absolute;
    top: -11px;
    left: -13px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
    background: #fff;
}
.switched {
    border-color: #8167a9 !important;
    background: #000 !important;
}
.switched #circle {
    left: 43px;
    background: #000;
}



/*SLIDAUS*/

/*TEE KAIKILLE OMA .SLIDE koska muuten ei toimi*/
.slide {
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #f0f0f0;
    transition: transform 0.5s ease;
    flex-direction: column;
    transition: background-color 0.5s ease;
}





#slide1 {
    background-image: url(13.jpg);
    background-size: cover;
    transition: background-color 0.5s ease;
    
    
}

#slide2 {
    background-image: url(12.jpg);
    background-size: cover;
    transition: background-color 0.5s ease;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    
}

.slide2-title {
    font-size: 1.8rem;
    color: white;
    font-family: 'Cormorant Upright', serif;
    font-weight: 600;
    width: 40%;
    top: 120%;
}

.slide2-description {
    font-size: 1.3rem;
    color: white;
    font-family: 'Cormorant Upright', serif;
    font-weight: 300;
    width: 40%;
    top: 160%;
}

#slide3 {
    background-color: rgb(0, 0, 0);
    transition: background-color 0.5s ease;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}





/*PALAUTUSNAPPI*/



@import url('https://fonts.googleapis.com/css?family=Muli:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext,vietnamese');
@import url('https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&subset=latin-ext');

:root {
    font-size: 20px;
    --red: #da2c4d;
    --yellow: #f8ab37;
    --green: #2ecc71;
    --white: #ffffff;
    --grey-light: #f2f7f9;
    --grey: #ecedf3;
    --black: #080808;
    --black-blue: #1f2029;
    --black-blue-light: #353746;
    --black-blue-light-2: #404255;
    --black-blue-light-3: #4b4d64;
    --black-light: #424455;
    --hover-arrow-color: rgb(0, 51, 8);
}



/* #Progress
================================================== */

.progress-wrap {
    position: fixed;
    right: 50px;
    bottom: 50px;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    border-radius: 50px;
    box-shadow: inset  0 0 0 2px rgba(255,255,255,0.2);
    z-index: 10000;
    opacity: 0;
    visibility: hidden;
    transform: translateY(15px);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.progress-wrap.active-progress {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.progress-wrap::after {
    position: absolute;
    content: '\2191'; /* Unicode for upward arrow */
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    color: var(--grey);
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 1000;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.progress-wrap:hover::after {
    opacity: 0;
}
.progress-wrap::before {
    position: absolute;
    content: '\2191'; /* Unicode for upward arrow */
    text-align: center;
    line-height: 46px;
    font-size: 24px;
    opacity: 0;
    background-image: linear-gradient(298deg, var(--red), var(--yellow));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: 0;
    top: 0;
    height: 46px;
    width: 46px;
    cursor: pointer;
    display: block;
    z-index: 2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
.progress-wrap:hover::before {
    opacity: 1;
}
.progress-wrap svg path { 
    fill: none; 
}
.progress-wrap svg.progress-circle path {
    stroke: var(--grey);
    stroke-width: 4;
    box-sizing:border-box;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}
body.light .progress-wrap {
    box-shadow: inset  0 0 0 2px rgba(0,0,0,0.2);
}
body.light .progress-wrap::after {
    color: var(--black-blue);
}
body.light .progress-wrap svg.progress-circle path {
    stroke: var(--black-blue);
}
.switch,
.circle {
-webkit-transition: all 300ms linear;
transition: all 300ms linear; 
} 
.switch {
width: 80px;
height: 4px;
border-radius: 27px;
background-image: linear-gradient(298deg, var(--red), var(--yellow));
position: fixed;
right: 50px;
top: 75px;
display: block;
margin: 0 auto;
text-align: center;
opacity: 1;
z-index: 33333;
    transition: all 300ms linear;
}
.circle {
cursor: pointer;
position: absolute;
top: 50%;
transform: translateY(-50%);
left: -5px;
width: 40px;
height: 40px;
border-radius: 50%;
background: var(--black-blue-light-3);
box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
animation: border-transform 10s linear infinite alternate forwards;
}
.circle:hover {
box-shadow: 0 8px 8px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}
.circle:before {
position: absolute;
font-family: 'unicons';
content: '\eac1';
top: 0;
left: 0;
z-index: 2;
font-size: 20px;
line-height: 40px;
text-align: center;
width: 100%;
height: 40px;
opacity: 1;
color: var(--grey);
-webkit-transition: all 300ms linear;
transition: all 300ms linear; 
}
.circle:after {
position: absolute;
font-family: 'unicons';
content: '\eb8f';
top: 0;
left: 0;
z-index: 2;
font-size: 20px;
line-height: 40px;
text-align: center;
width: 100%;
height: 40px;
color: var(--yellow);
opacity: 0;
-webkit-transition: all 300ms linear;
transition: all 300ms linear; 
}
.switched {
}
.switched .circle {
left: 45px;
box-shadow: 0 4px 4px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
background: var(--black-blue);
}
.switched .circle:hover {
box-shadow: 0 8px 8px rgba(26,53,71,0.25), 0 0 0 1px rgba(26,53,71,0.07);
}
.switched .circle:before {
opacity: 0;
}
.switched .circle:after {
opacity: 1;
}

.logo {
    position: absolute;
    top: 20px;
    left: 20px;
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: rgb(218,165,32, 0.7);

}

.logo span {
    color: rgba(255, 255, 255, 0.8);
}


.tekija {
    position: absolute;
    align-content: center;
    top: 700px;

    font-size: 2rem;
}

.tekija-tieto {
    position: absolute;
    align-content: center;
    top: 900px;
    font-family: 'Oswald', sans-serif;
    font-size: 1.3rem;
    background-color: rgba(51, 51, 51, 0.6);
    border-radius: 4px;
    padding: 40px 90px;
    width: 60%;
}


.tekija-tieto:hover {
    animation: hoverAnimation 0.5s ease-in-out;
    background-color: rgba(51, 51, 51, 0.8);
}


/*Max width 536px*/
@media (max-width: 536px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 1rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1rem;
        padding: 30px 35px;
        top: 150%;
        width: 80%;
    }

    .lopot {
        top: 220%;
    }

    .fotter {
        top: 235%;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 37%;
        padding-top: 22px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }

    p {
        font-size: 1.5rem;
        top: 55%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 100%;
    }

    h1 {
        font-size: 4rem;
    }

}    

/* Pienet laitteet (puhelimet, alle 600px) */
@media (max-width: 600px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 2rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1rem;
        padding: 30px 35px;
        top: 150%;
        width: 80%;
    }

    .lopot {
        top: 220%;
    }

    .fotter {
        top: 235%;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 37%;
        padding-top: 22px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }

    p {
        font-size: 1.5rem;
        top: 55%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 100%;
    }

}    

/* Keskikokoiset laitteet (tabletit, 600px - 768px) */
@media (min-width: 600px) and (max-width: 768px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 3rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1.7rem;
        padding: 30px 35px;
        top: 160%;
        width: 80%;
    }

    .lopot {
        top: 220%;
        font-size: 3rem;
    }

    .fotter {
        top: 235%;
        font-size: 1.4rem;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 37%;
        padding-top: 22px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }

    p {
        font-size: 1.5rem;
        top: 55%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 100%;
    }
}

/* Suuret laitteet (pienet kannettavat, 768px - 992px) */
@media (min-width: 768px) and (max-width: 992px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 3rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1.7rem;
        padding: 30px 35px;
        top: 160%;
        width: 80%;
    }

    .lopot {
        top: 220%;
        font-size: 3rem;
    }

    .fotter {
        top: 235%;
        font-size: 1.4rem;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 37%;
        padding-top: 22px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }

    p {
        font-size: 2rem;
        top: 55%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 100%;
    }
}

/* Erittäin suuret laitteet (suuret kannettavat ja pöytäkoneet, yli 992px) */
@media (min-width: 992px) and (max-width: 1200px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 2.5rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1.3rem;
        padding: 30px 35px;
        top: 160%;
        width: 80%;
    }

    .lopot {
        top: 220%;
        font-size: 3rem;
    }

    .fotter {
        top: 245%;
        font-size: 1.4rem;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 41%;
        padding-top: 24px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }
    
    h1 {
        font-size: 4rem;
    }

    p {
        font-size: 1.6rem;
        top: 60%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 80%;
    }
}

@media (min-width: 1201px) and (max-width: 1440px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 3rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 1.3rem;
        padding: 50px 60px;
        top: 160%;
        width: 60%;
    }

    .lopot {
        top: 240%;
        font-size: 2.5rem;
    }

    .fotter {
        top: 255%;
        font-size: 1.2rem;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 41%;
        padding-top: 24px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }
    
    h1 {
        font-size: 4.5rem;
    }

    p {
        font-size: 1.8rem;
        top: 55%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 100%;
    }
}

@media (min-width: 1442px) {
    .slide2-description {
        font-size: 1.5rem;
    }
    .tekija {
        font-size: 4rem;
        top: 120%;
    }
    .tekija-tieto {
        font-size: 2.2rem;
        padding: 30px 35px;
        top: 160%;
        width: 60%;
    }

    .lopot {
        top: 230%;
        font-size: 3.4rem;
    }

    .fotter {
        top: 245%;
        font-size: 1.7rem;
    }

    .nav-but-wrap{ 
        position: absolute;
        display: inline-block;
        float: right;
        padding-left: 44%;
        padding-top: 29px;
        margin-top: 26px;
        transition : all 0.3s ease-out;
    }
    
    h1 {
        font-size: 8rem;
    }

    p {
        font-size: 3rem;
        top: 60%;
    }

    #slide3 {
        background-color: rgb(0, 0, 0);
        height: 80%;
    }

    .logo {
        font-size: 3.4rem;
    }

    .cd-header {

    }
}


