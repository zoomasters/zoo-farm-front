import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}
const GlobalStyle = createGlobalStyle`
.bg{
  background:url("/img/bg.png") !important;
  background-size:cover !important;
  background-repeat:no-repeat !important;
  background-position:center !important;
}
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");
  
  
body, main {
  font-family: "Poppins", sans-serif !important;
  font-weight: 400;
  font-size: 10px;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
@media (min-width: 769px){
  .brand-img {
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    filter: grayscale(100%);
  }
  .brand-img:hover {
    filter: grayscale(10%);
    transform: scale(1.04);
  }
}

.bg-primary {
  background-color: #006EE9;
}

.btn-primary {
  background-color: #006EE9;
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}

.btn-outline-primary {
  border-color: #006EE9;
  color: #006EE9;
  transition: all 0.3s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.btn-outline-primary:hover {
  background: none;
  color: #006EE9;
}

.slick-arrow {
  width: 70px !important;
}

.slick-responsive-carousel {
  position: relative;
}
.slick-responsive-carousel .prev {
  display: block;
  position: absolute;
  z-index: 1000;
  top: 50%;
  transform: translateY(-20%);
  left: -40px;
}
.slick-responsive-carousel .next {
  display: block;
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-20%);
  z-index: 1000;
  right: -25px;
}

.col-half-offset {
  margin-left: 4.166666667%;
}

.navbar .navbar-nav .nav-item .nav-link {
  font-size: 0.9rem;
  margin-right: 1rem;
  padding: 0.5rem;
  background-color:transparent;
  border:none;
  shadow:none;
}
.navbar .navbar-nav .nav-item .nav-link:hover {
  outline: 1px solid white;
  background-color: white;
  color: #006EE9 !important;
}
.navbar .navbar-toggler {
  outline: none !important;
  border: none !important;
}
.navbar .navbar-toggler:focus {
  box-shadow: none !important;
}

.checkmark2 {
  display: inline-block;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg);
  /* IE 9 */
  -webkit-transform: rotate(45deg);
  /* Chrome, Safari, Opera */
  transform: rotate(45deg);
}

.checkmark_stem2 {
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: #ccc;
  left: 11px;
  top: 6px;
}

.checkmark_kick2 {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: #ccc;
  left: 8px;
  top: 12px;
}

.checkmark {
  display: inline-block;
  width: 22px;
  height: 22px;
  -ms-transform: rotate(45deg);
  /* IE 9 */
  -webkit-transform: rotate(45deg);
  /* Chrome, Safari, Opera */
  transform: rotate(45deg);
}

.checkmark_circle {
  position: absolute;
  width: 22px;
  height: 22px;
  background-color: green;
  border-radius: 11px;
  left: 0;
  top: 0;
}

.checkmark_stem {
  position: absolute;
  width: 3px;
  height: 9px;
  background-color: #fff;
  left: 11px;
  top: 6px;
}

.checkmark_kick {
  position: absolute;
  width: 3px;
  height: 3px;
  background-color: #fff;
  left: 8px;
  top: 12px;
}

a, a:visited {
  outline: none;
}

#hero {
  background-image: url("/assets/img/bg_shadow.png");
  min-height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  overflow-x: hidden;
  margin-top: 4rem;
}
#hero .hero-content {
  padding-top: 17rem;
  margin-bottom: 11rem;
}
// #hero .hero-content h2 {
//   font-size: 1.6rem;
//   color: #006EE9;
//   font-weight: bold;
//   line-height: 2.5rem;
//   margin-bottom: 2rem;
// }
#hero .hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 500;
}
#hero .hero-image {
  position: absolute;
  right: -0.2rem;
  padding-top: 3rem;
  display: none;
}
#hero .hero-short {
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
}
#hero .hero-short .text {
  font-size: 1rem;
  color: #858585;
  font-weight: 500;
}

#about-us {
  background-color: #EFF9FB;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
#about-us .about-content h3 {
  margin-bottom: 4rem;
  font-size: 3rem;
  color: #006EE9;
  margin-left: 3rem;
}
#about-us .about-content .about-content-message h5 {
  color: #006EE9;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}
#about-us .about-content .about-content-message p {
  font-size: 1.2rem;
  color: #5C5C5C;
  margin-bottom: 2rem;
}
#about-us .about-blog-card .title {
  font-size: 1.5rem;
  color: #070d1a;
  margin-top: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

#how-to-section .info {
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
#how-to-section .info .heading {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  color: #006EE9;
  margin-left: 3rem;
}
#how-to-section .info p {
  color: #5C5C5C;
  font-size: 1rem;
}
#how-to-section .info-card {
  text-align: center;
}
#how-to-section .info-card .card-title {
  font-size: 1.2rem;
  color: #006EE9;
  margin-top: 0.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
#how-to-section .info-card .card-description {
  font-size: 1rem;
  color: #5C5C5C;
}
#how-to-section .stats-info {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 500;
  color: #006EE9;
}
#how-to-section .stats-info .meta {
  margin-top: 1.3rem;
  font-size: 0.7rem;
}

#support-community {
  background-color: #EFF9FB;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
#support-community .heading {
  padding-left: 13rem;
  padding-right: 13rem;
  text-align: center;
  margin-bottom: 3rem;
}
#support-community .heading h2 {
  margin-bottom: 1.6rem;
  font-size: 2rem;
  color: #006EE9;
  font-weight: 600;
}
#support-community .heading p {
  color: #5C5C5C;
  font-size: 1.4rem;
}
#support-community .support-areas {
  padding-left: 13rem;
  padding-right: 13rem;
  margin-top: 5rem;
}
#support-community .support-areas .carousel-section {
  padding: 1rem;
}
#support-community .support-areas .carousel-section .draggable {
  height: 23rem !important;
}
#support-community .support-areas .area-card {
  margin-top: 8rem;
  text-align: center;
  align-items: center;
  position: relative;
  width: fit-content;
  padding-top: 2rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem #e7f6f9 !important;
  margin-bottom: 2rem;
}
#support-community .support-areas .area-card img {
  top: -140px;
  margin: auto;
  width: 75%;
  position: absolute;
}
#support-community .support-areas .area-card .title {
  color: #006EE9;
  font-size: 1.2rem;
  margin-top: 0.7rem;
  font-weight: 600;
}
#support-community .support-areas .area-card .description {
  color: #858585;
  font-size: 0.9rem;
}
#support-community .support-areas .area-card .meta {
  color: #006EE9;
}
#support-community .support-areas .support-cta {
  text-align: center;
}
#support-community .support-areas .support-cta p {
  font-size: 1rem;
  color: #5C5C5C;
}

#our-mission .hero {
  text-align: center;
}
#our-mission .info {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
}
#our-mission .info h3 {
  color: #006EE9;
  font-weight: 600;
  font-size: 3rem;
  margin-bottom: 2rem;
}
#our-mission .info p {
  color: #5C5C5C;
  font-weight: 500;
  font-size: 1.7rem;
}
#our-mission .divider {
  width: 70%;
  border: 1px solid #D6D6D6;
  margin: auto;
  margin-bottom: 3rem;
}
#our-mission #step-paths {
  width: 60%;
  margin: auto;
  margin-top: -4rem;
  margin-bottom: 4rem;
  padding: 2rem;
  position: relative;
}
#our-mission #step-paths .question-content {
  width: 50%;
  margin: auto;
  text-align: center;
}
#our-mission #step-paths .question-content .question-title {
  color: #006EE9;
  font-size: 1.2rem;
  font-weight: 500;
}
#our-mission #step-paths .question-content .question-description {
  font-size: 1.5rem;
  color: #858585;
}
#our-mission #step-paths .steps ul {
  display: flex;
}
#our-mission #step-paths .steps ul li {
  list-style-type: none;
  margin-right: 6rem;
}
#our-mission #step-paths .steps ul li a {
  text-decoration: none;
  font-size: 5rem;
  color: #006EE9;
  font-weight: 600;
}
#our-mission #step-paths .steps ul li a .number {
  display: none;
}
#our-mission #step-paths .steps ul li a .audible {
  display: none;
}
#our-mission #step-paths .steps ul li a img {
  transition: all 0.4s;
  opacity: 0.2;
  filter: grayscale(100%);
}
#our-mission #step-paths .steps ul li:hover a img {
  opacity: 0.2;
  filter: grayscale(50%);
}
#our-mission #step-paths .steps ul li.current a img {
  opacity: 1;
  filter: grayscale(0%);
}
#our-mission #step-paths .content .title {
  display: none;
}
#our-mission #step-paths .actions {
  position: absolute;
  top: 61%;
  width: 95%;
}
#our-mission #step-paths .actions ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
#our-mission #step-paths .actions ul li {
  list-style-type: none;
}
#our-mission #step-paths .actions ul li a {
  text-decoration: none;
}
#our-mission #step-paths .actions ul:nth-child(1) a {
  color: red;
}

#team-section {
  padding-left: 13rem;
  padding-right: 13rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
}
#team-section .team-card {
  text-align: center;
  position: relative;
  padding-top: 3rem;
  border-radius: 0.3rem;
  box-shadow: 0 0.125rem 5px 3px rgba(0, 0, 0, 0.15) !important;
}
#team-section .team-card img {
  position: absolute;
  top: -50px;
  left: 36%;
}
#team-section .team-card .team-title {
  font-size: 1rem;
  font-weight: 600;
  color: #006EE9;
}
#team-section .team-card .team-position {
  color: #006EE9;
  font-weight: 600;
  font-size: 0.6rem;
}
#team-section .team-card .team-about {
  margin-top: 1rem;
  font-size: 1rem;
  color: #5C5C5C;
}

#brands {
  margin-bottom: 4rem;
}
#brands .brand-img {
  transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  filter: grayscale(100%);
}
#brands .brand-img:hover {
  filter: grayscale(10%);
  transform: scale(1.04);
}

#footer {
  background-color: #172951;
  padding: 4rem;
  padding-bottom: 3rem;
  color: white;
}
#footer .brand-description .address {
  margin-left: 2rem;
  margin-top: 1rem;
}
#footer .brand-description .address h5 {
  font-weight: 600;
}
#footer .brand-description .address p {
  opacity: 0.7;
}
#footer .social-icons {
  align-items: center;
}
#footer .social-icons span {
  margin-right: 2rem;
}
#footer .social-icons span img {
  margin-left: none;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}
#footer .social-icons span:hover img {
  transform: scale(1.4);
  outline: 5px dotted rgba(255, 255, 255, 0.219);
  border-radius: 90px;
}
#footer .footer-about {
  font-size: 1rem;
  opacity: 0.8;
}
#footer .copyright-text {
  opacity: 0.8;
  text-align: left !important;
}
.base-css{
  margin-top:80px
}
@media only screen and (max-width: 800px) {
  .col-half-offset {
    margin-left: 0%;
  }

  #hero {
    background-image: url("/assets/img/bg_shadow.png");
    min-height: 100%;
    background-repeat: no-repeat;
    background-size: 48rem !important;
    background-position-x: -17rem;
    position: relative;
    overflow-x: hidden;
  }
  #hero .hero-content {
    text-align: center;
    padding: 2rem;
    padding-top: 25rem !important;
    margin-bottom: 0rem;
    padding-bottom: 2rem;
  }
  #hero .hero-content h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: #070d1a;
  }
  #hero .hero-content p {
    font-size: 2.6rem;
    color: #006EE9;
    font-weight: bold;
    line-height: 2.5rem;
    margin-bottom: 2rem;
  }
  #hero .hero-content .hero-content-buttons {
    display: flex;
    flex-direction: column;
  }
  #hero .hero-content .hero-content-buttons a {
    margin-bottom: 1rem;
    display:flex;
  }
  #hero .hero-image {
    position: absolute;
    right: -0.2rem;
    padding-top: 3rem;
  }
  #hero .hero-image img {
    width: 334px !important;
  }
  #hero .hero-short {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  #hero .hero-short .text {
    font-size: 1rem;
    color: #858585;
    font-weight: 500;
  }
  .hero-content-buttons a {
    display:flex;
    align-items: center;
  }
  #about-us {
    background-color: #EFF9FB;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  #about-us .about-content {
    text-align: center;
  }
  #about-us .about-content .tapir-image-mobile {
    margin-bottom: 5rem;
  }
  #about-us .about-content h3 {
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #006EE9;
    margin-left: 3rem;
    font-weight: 600;
  }
  #about-us .about-content .about-content-message {
    padding: 1.5rem;
  }
  #about-us .about-content .about-content-message h5 {
    color: #006EE9;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
  #about-us .about-content .about-content-message p {
    font-size: 1rem;
    color: #5C5C5C;
    margin-bottom: 2rem;
  }
  #about-us .about-blog-card {
    padding: 0.5rem;
  }
  #about-us .about-blog-card .title {
    font-size: 1.2rem;
    color: #070d1a;
    margin-top: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  #how-to-section {
    padding: 1rem;
  }
  #how-to-section .info {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  #how-to-section .info .heading {
    margin-bottom: 1rem;
    font-size: 1.4rem;
    color: #006EE9;
    margin-left: 3rem;
    font-weight: 600;
  }
  #how-to-section .info p {
    color: #5C5C5C;
    font-size: 0.9rem;
  }
  #how-to-section .info-card {
    margin-bottom: 2rem;
    text-align: center;
  }
  #how-to-section .info-card .card-icon img {
    width: 4rem;
  }
  #how-to-section .info-card .card-title {
    font-size: 1.2rem;
    color: #006EE9;
    margin-top: 0.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  #how-to-section .info-card .card-description {
    font-size: 1rem;
    color: #5C5C5C;
  }
  #how-to-section .stats-info {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #006EE9;
  }
  #how-to-section .stats-info .meta {
    margin-top: 1.3rem;
    font-size: 0.8rem;
  }

  #support-community {
    background-color: #EFF9FB;
  }
  #support-community .heading {
    text-align: center;
    margin-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  #support-community .heading h2 {
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    color: #006EE9;
    font-weight: 600;
  }
  #support-community .heading p {
    color: #5C5C5C;
    font-size: 0.7rem;
    padding: 1rem;
  }
  #support-community .support-areas {
    padding-left: 0rem;
    padding-right: 0rem;
    padding: 1rem;
    margin-top: 3rem !important;
  }
  #support-community .support-areas .carousel-section {
    padding: 1rem;
  }
  #support-community .support-areas .carousel-section .draggable {
    height: 20rem !important;
  }
  #support-community .support-areas .area-card {
    margin-top: 8rem;
    text-align: center;
    align-items: center;
    position: relative;
    width: fit-content;
    padding-top: 2rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem #e7f6f9 !important;
    margin-bottom: 2rem;
  }
  #support-community .support-areas .area-card img {
    top: -140px;
    margin: auto;
    width: 75%;
    position: absolute;
  }
  #support-community .support-areas .area-card .title {
    color: #006EE9;
    font-size: 1.2rem;
    margin-top: 0.7rem;
    font-weight: 600;
  }
  #support-community .support-areas .area-card .description {
    color: #858585;
    font-size: 0.9rem;
  }
  #support-community .support-areas .area-card .meta {
    color: #006EE9;
  }
  #support-community .support-areas .support-cta {
    text-align: center;
    margin-bottom: 2rem;
  }
  #support-community .support-areas .support-cta p {
    font-size: 1rem;
    color: #5C5C5C;
  }

  #our-mission {
    padding: 1rem;
  }
  #our-mission .hero {
    text-align: center;
  }
  #our-mission .hero img {
    width: 200px;
  }
  #our-mission .info {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  #our-mission .info h3 {
    color: #006EE9;
    font-weight: 600;
    font-size: 1.7rem;
    margin-bottom: 2rem;
  }
  #our-mission .info p {
    color: #5C5C5C;
    font-weight: 500;
    font-size: 1rem;
  }
  #our-mission .divider {
    width: 100%;
    border: 1px solid #D6D6D6;
    margin: auto;
    margin-bottom: 3rem;
  }
  #our-mission #step-paths {
    width: 100%;
    margin: auto;
    margin-top: -4rem;
    margin-bottom: 4rem;
    padding: 0rem;
    position: relative;
  }
  #our-mission #step-paths .question-content {
    width: 100%;
    margin: auto;
    text-align: center;
    padding-left: 5rem;
    padding-right: 3rem;
  }
  #our-mission #step-paths .question-content .question-title {
    color: #006EE9;
    font-size: 1.2rem;
    font-weight: 500;
  }
  #our-mission #step-paths .question-content .question-description {
    font-size: 1rem;
    color: #858585;
  }
  #our-mission #step-paths .steps ul {
    display: flex;
    justify-content: center;
  }
  #our-mission #step-paths .steps ul li {
    list-style-type: none;
    margin-right: 2rem;
  }
  #our-mission #step-paths .steps ul li a {
    text-decoration: none;
    font-size: 5rem;
    color: #006EE9;
    font-weight: 600;
  }
  #our-mission #step-paths .steps ul li a .number {
    display: none;
  }
  #our-mission #step-paths .steps ul li a .audible {
    display: none;
  }
  #our-mission #step-paths .steps ul li a img {
    transition: all 0.4s;
    opacity: 0.2;
    filter: grayscale(100%);
    width: 30px !important;
  }
  #our-mission #step-paths .steps ul li:hover a img {
    opacity: 0.2;
    filter: grayscale(50%);
  }
  #our-mission #step-paths .steps ul li.current a img {
    opacity: 1;
    filter: grayscale(0%);
  }
  #our-mission #step-paths .content .title {
    display: none;
  }
  #our-mission #step-paths .actions {
    position: absolute;
    top: 61%;
    width: 95%;
  }
  #our-mission #step-paths .actions ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  #our-mission #step-paths .actions ul li {
    list-style-type: none;
  }
  #our-mission #step-paths .actions ul li a {
    text-decoration: none;
  }
  #our-mission #step-paths .actions ul:nth-child(1) a {
    color: red;
  }

  #team-section {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #team-section .col-lg-4 {
    margin-bottom: 6rem;
  }
  #team-section .team-card {
    text-align: center;
    position: relative;
    padding-top: 3rem;
    margin-bottom: 5rem;
    border-radius: 0.3rem;
    box-shadow: 0 0.125rem 5px 3px rgba(0, 0, 0, 0.15) !important;
  }
  #team-section .team-card img {
    position: absolute;
    top: -50px;
    left: 36%;
  }
  #team-section .team-card .team-title {
    font-size: 1rem;
    font-weight: 600;
    color: #006EE9;
  }
  #team-section .team-card .team-position {
    color: #006EE9;
    font-weight: 600;
    font-size: 0.6rem;
  }
  #team-section .team-card .team-about {
    margin-top: 1rem;
    font-size: 1rem;
    color: #5C5C5C;
  }

  #brands {
    margin-bottom: 2rem;
  }
  #brands .info {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  #brands .brand-img {
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    filter: grayscale(0%);
    width: 107px !important;
  }
  #brands .brand-img:hover {
    filter: grayscale(10%);
    transform: scale(1.04);
  }

  #footer {
    background-color: #172951;
    padding: 2rem;
    padding-bottom: 3rem;
    color: white;
    text-align: center;
  }
  #footer .brand-description {
    margin-bottom: 2rem;
  }
  #footer .brand-description .address {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  #footer .brand-description .address h5 {
    font-weight: 600;
  }
  #footer .brand-description .address p {
    opacity: 0.9;
  }
  #footer .social-icons {
    margin-bottom: 2rem;
    align-items: center;
  }
  #footer .social-icons span {
    margin-right: 1rem;
  }
  #footer .social-icons span img {
    width: 40px;
    margin-left: none;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  #footer .social-icons span:hover img {
    transform: scale(1.4);
    outline: 5px dotted rgba(255, 255, 255, 0.219);
    border-radius: 90px;
  }
  #footer .footer-about {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  #footer .copyright-text {
    text-align: center !important;
    opacity: 0.9;
    margin-top: 4rem;
  }
}
@media screen and (min-width: 800px) and (max-width: 1279px) {
  #hero {
    background-image: url("/assets/img/bg_shadow.png");
    min-height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    overflow-x: hidden;
    margin-top: 4rem;
  }
  #hero .hero-content {
    padding-top: 15rem;
    margin-bottom: 10rem;
  }
  #hero .hero-content h2 {
    font-size: 1.2rem;
    color: #006EE9;
    font-weight: bold;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }
  #hero .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }
  #hero .hero-image {
    position: absolute;
    right: -0.2rem;
    padding-top: 3rem;
  }
  #hero .hero-image img {
    width: 398px !important;
  }
  #hero .hero-short {
    display: flex;
    align-items: center;
    margin-bottom: 5rem;
  }
  #hero .hero-short .text {
    font-size: 1rem;
    color: #858585;
    font-weight: 500;
  }

  #about-us {
    background-color: #EFF9FB;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  #about-us .about-content h3 {
    margin-bottom: 4rem;
    font-size: 2rem;
    color: #006EE9;
    margin-left: 3rem;
  }
  #about-us .about-content .about-content-message h5 {
    color: #006EE9;
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  #about-us .about-content .about-content-message p {
    font-size: 1rem;
    color: #5C5C5C;
    margin-bottom: 2rem;
  }
  #about-us .about-blog-card .title {
    font-size: 1.2rem;
    color: #070d1a;
    margin-top: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  #how-to-section .info {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  #how-to-section .info .heading {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #006EE9;
    margin-left: 3rem;
  }
  #how-to-section .info p {
    color: #5C5C5C;
    font-size: 1rem;
  }
  #how-to-section .info-card {
    text-align: center;
  }
  #how-to-section .info-card .card-title {
    font-size: 1.1rem;
    color: #006EE9;
    margin-top: 0.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  #how-to-section .info-card .card-description {
    font-size: 0.9rem;
    color: #5C5C5C;
  }
  #how-to-section .stats-info {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: #006EE9;
  }
  #how-to-section .stats-info .meta {
    margin-top: 1.3rem;
    font-size: 0.7rem;
  }

  #support-community {
    background-color: #EFF9FB;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  #support-community .heading {
    padding-left: 6.5rem;
    padding-right: 6.5rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  #support-community .heading h2 {
    margin-bottom: 1.6rem;
    font-size: 2rem;
    color: #006EE9;
    font-weight: 600;
  }
  #support-community .heading p {
    color: #5C5C5C;
    font-size: 1.2rem;
  }
  #support-community .support-areas {
    padding-left: 6rem;
    padding-right: 6rem;
    margin-top: 5rem;
  }
  #support-community .support-areas .carousel-section {
    padding: 1rem;
  }
  #support-community .support-areas .carousel-section .draggable {
    height: 21rem !important;
  }
  #support-community .support-areas .area-card {
    margin-top: 8rem;
    text-align: center;
    align-items: center;
    position: relative;
    width: fit-content;
    padding-top: 2rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem #e7f6f9 !important;
    margin-bottom: 2rem;
  }
  #support-community .support-areas .area-card img {
    top: -133px;
    margin: auto;
    width: 75%;
    position: absolute;
  }
  #support-community .support-areas .area-card .title {
    color: #006EE9;
    font-size: 1.12rem;
    margin-top: 0.7rem;
    font-weight: 600;
  }
  #support-community .support-areas .area-card .description {
    color: #858585;
    font-size: 0.8rem;
  }
  #support-community .support-areas .area-card .meta {
    color: #006EE9;
  }
  #support-community .support-areas .support-cta {
    text-align: center;
  }
  #support-community .support-areas .support-cta p {
    font-size: 1rem;
    color: #5C5C5C;
  }

  #our-mission .hero {
    text-align: center;
  }
  #our-mission .hero img {
    width: 200px;
  }
  #our-mission .info {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  #our-mission .info h3 {
    color: #006EE9;
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  #our-mission .info p {
    color: #5C5C5C;
    font-weight: 500;
    font-size: 1.5rem;
  }
  #our-mission .divider {
    width: 70%;
    border: 1px solid #D6D6D6;
    margin: auto;
    margin-bottom: 3rem;
  }
  #our-mission #step-paths {
    width: 77%;
    margin: auto;
    margin-top: -4rem;
    margin-bottom: 4rem;
    padding: 1rem;
    position: relative;
  }
  #our-mission #step-paths .question-content {
    width: 50%;
    margin: auto;
    text-align: center;
  }
  #our-mission #step-paths .question-content .question-title {
    color: #006EE9;
    font-size: 1.2rem;
    font-weight: 500;
  }
  #our-mission #step-paths .question-content .question-description {
    font-size: 1.5rem;
    color: #858585;
  }
  #our-mission #step-paths .steps ul {
    display: flex;
  }
  #our-mission #step-paths .steps ul li {
    list-style-type: none;
    margin-right: 6rem;
  }
  #our-mission #step-paths .steps ul li a {
    text-decoration: none;
    font-size: 5rem;
    color: #006EE9;
    font-weight: 600;
  }
  #our-mission #step-paths .steps ul li a .number {
    display: none;
  }
  #our-mission #step-paths .steps ul li a .audible {
    display: none;
  }
  #our-mission #step-paths .steps ul li a img {
    transition: all 0.4s;
    opacity: 0.2;
    filter: grayscale(100%);
  }
  #our-mission #step-paths .steps ul li:hover a img {
    opacity: 0.2;
    filter: grayscale(50%);
  }
  #our-mission #step-paths .steps ul li.current a img {
    opacity: 1;
    filter: grayscale(0%);
  }
  #our-mission #step-paths .content .title {
    display: none;
  }
  #our-mission #step-paths .actions {
    position: absolute;
    top: 61%;
    width: 95%;
  }
  #our-mission #step-paths .actions ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  #our-mission #step-paths .actions ul li {
    list-style-type: none;
  }
  #our-mission #step-paths .actions ul li a {
    text-decoration: none;
  }
  #our-mission #step-paths .actions ul:nth-child(1) a {
    color: red;
  }

  #team-section {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }
  #team-section .team-card {
    text-align: center;
    position: relative;
    padding-top: 3rem;
    border-radius: 0.3rem;
    box-shadow: 0 0.125rem 5px 3px rgba(0, 0, 0, 0.15) !important;
  }
  #team-section .team-card img {
    position: absolute;
    top: -50px;
    left: 36%;
  }
  #team-section .team-card .team-title {
    font-size: 1rem;
    font-weight: 600;
    color: #006EE9;
  }
  #team-section .team-card .team-position {
    color: #006EE9;
    font-weight: 600;
    font-size: 0.6rem;
  }
  #team-section .team-card .team-about {
    margin-top: 1rem;
    font-size: 0.7rem;
    color: #5C5C5C;
  }

  #brands {
    margin-bottom: 4rem;
  }
  #brands .info p {
    padding-left: 5rem;
    padding-right: 5rem;
  }
  #brands .brand-img {
    transition: all 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    filter: grayscale(100%);
  }
  #brands .brand-img:hover {
    filter: grayscale(10%);
    transform: scale(1.04);
  }

  #footer {
    background-color: #172951;
    padding: 3rem;
    padding-bottom: 3rem;
    color: white;
  }
  #footer .brand-description .address {
    margin-left: 2rem;
    margin-top: 1rem;
  }
  #footer .brand-description .address h5 {
    font-weight: 600;
  }
  #footer .brand-description .address p {
    opacity: 0.7;
  }
  #footer .social-icons {
    align-items: center;
  }
  #footer .social-icons span {
    margin-right: 2rem;
  }
  #footer .social-icons span img {
    margin-left: none;
    transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  #footer .social-icons span:hover img {
    transform: scale(1.4);
    outline: 5px dotted rgba(255, 255, 255, 0.219);
    border-radius: 90px;
  }
  #footer .footer-about {
    font-size: 0.8rem;
    opacity: 0.8;
  }
  #footer .copyright-text {
    opacity: 0.8;
    text-align: left !important;
  }
}

/*# sourceMappingURL=style.css.map */

`

export default GlobalStyle
