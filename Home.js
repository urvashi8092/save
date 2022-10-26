import React from "react";
import bannerImg from "../images/herobanner.png";
import logoImg from "../images/logo.png";
import "react-transition-group";
import downarrow from "../images/downarrow.png";
import aboutPeopleImg from "../images/aboutPeopleImg.png";
import aboutPeopleImg2 from "../images/aboutPeopleImg2.png";
import videoImg from "../images/videoframe.png";
import { RiMacFill } from "@react-icons/all-files/ri/RiMacFill";
import { AiOutlineDesktop } from "@react-icons/all-files/ai/AiOutlineDesktop";
import { FaRocket } from "@react-icons/all-files/fa/FaRocket";
import { BsChatDotsFill } from "@react-icons/all-files/bs/BsChatDotsFill";
import { SiGoogleanalytics } from "@react-icons/all-files/si/SiGoogleanalytics";
import { RiHeadphoneFill } from "@react-icons/all-files/ri/RiHeadphoneFill";
import { IoIosPeople } from "@react-icons/all-files/io/IoIosPeople";
import { RiCupFill } from "@react-icons/all-files/ri/RiCupFill";
import { AiTwotoneTrophy } from "@react-icons/all-files/ai/AiTwotoneTrophy";

import howWork from "../images/howWorks.png";

const Home = () => {
  return (
    <>
      <div className="wholeContainer">
        <div>
          <img src={logoImg} className="companyName"></img>
        </div>
        <div className="discrptionName">
          <ul className="discrptionName">
            <li className="discrptionName">
              <a>Home. </a>
            </li>

            <li className="discrptionName">
              <a>About Us.</a>
            </li>

            <li className="discrptionName">
              <a>Our Service. </a>
            </li>

            <li className="discrptionName">
              <a>Portfolio. </a>
            </li>

            <li className="discrptionName">
              <a>Blog. </a>
            </li>

            <li className="discrptionName">
              <a>Pages.</a>
            </li>
          </ul>
        </div>
        <div>
          <button
            class="btn btn-outline-light rounded-pill btn-sm shadow-sm "
            id="contactText"
          >
            <p className="textContact">Contact</p>
          </button>
          <div className="arrow-icon" id="arrow-icon"></div>
        </div>
      </div>
      <div className="welcome-text text-center">
        <h1>
          Creative Solution to <br></br>
          <span>Improve your Business.</span>
        </h1>
        <img src={bannerImg} alt="bannerimg" className="bannerImg"></img>
        <br></br>
        <img src={downarrow} alt="downarrowimg" className="downarrowimg"></img>
        <h2></h2>
      </div>
      <br></br>
      <div className="About-text mb-4 text-center ">
        <div className="About-text mb-4 text-center ">
          <h2>About Us</h2>
          <span
            data-enllax-ratio="2.5"
            data-enllax-type="foreground"
            data-enllax-direction="horizontal"
          >
            About Us
          </span>

          <p>
            dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. this dolor sit amet.
          </p>
        </div>
      </div>
      <div className="aboutTextData">
        <div className="row align-items-center" id="rowAlingItemCenter">
          <div className="col-md-6 col-sm-12">
            <img src={aboutPeopleImg} className="imgPeople"></img>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-content">
              <h4>
                Some Fine <br></br>Words About Us
              </h4>

              <div className="about-content">
                <p>
                  this is simply dummy text of the printing and typesetting
                  industry. has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wholeBox">
        <div className="col-md-6 col-sm-12">
          <div>
            <div className="about-content">
              <h4>
                Some Fine <br></br>Words About Us
              </h4>
            </div>
            <div className="about-content">
              <p>
                this is simply dummy text of the printing and typesetting
                industry. has been the industry's standard dummy text ever since
                the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6 col-sm-12">
            <img src={aboutPeopleImg2} className="imgPeoples"></img>
          </div>
        </div>
      </div>
      <br></br>

      <div className="row align-items-center" id="videoCenterBox">
        <div className="col-md-10 mx-auto">
          <img src={videoImg} className="VideoImg" id="VideoImg"></img>
          <div class="text-center" id="videoCircle">
            <a class="animated-btn text-white" href="#">
              <i class="fa fa-play"></i>
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="86"
              // height="86"
              fill="currentColor"
              class="bi bi-play-btn"
              viewBox="0 0 16 16"
              id="playButton"
            >
              <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
              {/* <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" /> */}
            </svg>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title-block mx-auto">
          <div className="section_title mb-4 text-center">
            <h2>
              <span>App Features</span>
            </h2>
            <span
              data-enllax-ratio="2.5"
              data-enllax-type="foreground"
              data-enllax-direction="horizontal"
              class="scroll-title"
            ></span>
            <p className="section_subtitle mx-auto">
              this dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. this dolor sit
              amet.
            </p>
          </div>
        </div>
        <div className="row" id=" wholeRowContainer">
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger  btn-sm shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <RiMacFill />
                  </h1>
                </div>
                <div className="cleanDesignBox">
                  <h3>Clean Design</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger  btn-sm shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <AiOutlineDesktop />
                  </h1>

                  <h4 className="smartPhone">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="2" y="2" width="14" height="20" ry="2"></rect>
                      <line x1="6" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </h4>
                </div>
                <div className="cleanDesignBox">
                  <h3>Responsive Design</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger  btn-sm shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <FaRocket />
                  </h1>
                </div>
                <div className="cleanDesignBox">
                  <h3>Fast Boot</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger  btn-sm shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <BsChatDotsFill />
                  </h1>
                </div>
                <div className="cleanDesignBox">
                  <h3>Chatting Service</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger  btn-sm  shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <SiGoogleanalytics />
                  </h1>
                </div>
                <div className="cleanDesignBox">
                  <h3>Analysis</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
          <div className="col-lg-4 col-sm-6 col-12" id="wholeBoxContainer">
            <button
              className="btn btn-outline-danger btn-sm shadow p-3 mb-5"
              id="wholeDataBox"
            >
              <div className="features-info">
                <div className="featured-icons ">
                  <h1>
                    <RiHeadphoneFill />
                  </h1>
                </div>
                <div className="cleanDesignBox">
                  <h3>Quick Support</h3>
                </div>

                <div className="textBox">
                  Add, delete and move elements around on the front end of your
                  website. No coding and no confusing back end options.
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="container" id="container">
        <div className="sec_title mb-4 text-center">
          <h2 className="howDoesWork">How Does It Works?</h2>
          <span
            data-enllax-ratio="2.5"
            data-enllax-type="foreground"
            data-enllax-direction="horizontal"
          >
            How Does It Works?
          </span>
          <p className="section_subtitle mx-auto">
            this dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. this dolor sit
            amet.
          </p>
        </div>
      </div>
      <div className="wholeDataImgContainer">
        <div className="work-steps-process">
          <div className="work-steps-box">
            <div className="row align-items-center" id="wholeStepBox">
              <div className="col-md-6 col-sm-12">
                <button
                  class="btn btn-outline-light btn-sm shadow p-3 mb-5"
                  id="wholeStepBox"
                >
                  <div className="steps-infos">
                    <div className="steps-icon">
                      <h2 className="btn btn-light btn-circle btn-xl">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-width="2"
                            d="M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23"
                          ></path>
                        </svg>
                      </h2>
                    </div>
                    <div className="steps-text">
                      <h4>Design & Developing</h4>
                      <p className="step-desc">
                        There are many variations of passages of this available,
                        but the majority have suffered alteration in some form,
                        by injected humour,
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  class="btn btn-outline-light btn-sm shadow p-3 mb-5"
                  id="wholeStepBox"
                >
                  <div className="steps-infos">
                    <div className="steps-icon">
                      <h2 className="btn btn-light btn-circle btn-xl">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-width="2"
                            d="M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23"
                          ></path>
                        </svg>
                      </h2>
                    </div>
                    <div className="steps-text">
                      <h4>Design & Developing</h4>
                      <p className="step-desc">
                        There are many variations of passages of this available,
                        but the majority have suffered alteration in some form,
                        by injected humour,
                      </p>
                    </div>
                  </div>
                </button>
                <button
                  className="btn btn-outline-light btn-sm shadow p-3 mb-5"
                  id="wholeStepBox"
                >
                  <div className="steps-infos">
                    <div className="steps-icon">
                      <h2 className="btn btn-light btn-circle btn-xl">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          stroke-width="0"
                          viewBox="0 0 24 24"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            stroke-width="2"
                            d="M3,1 L3,23 L16,23 L21,18 L21,1 L3,1 Z M6,17 L11,17 M6,13 L18,13 M6,9 L16,9 M3,5 L21,5 M21,17 L15,17 L15,23"
                          ></path>
                        </svg>
                      </h2>
                    </div>
                    <div className="steps-text">
                      <h4>Design & Developing</h4>
                      <p className="step-desc">
                        There are many variations of passages of this available,
                        but the majority have suffered alteration in some form,
                        by injected humour,
                      </p>
                    </div>
                  </div>
                </button>
                <div className="col-md-6 col-sm-12">
                  <div className="col-md-6 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="howWorkImg">
          <img src={howWork}></img>
        </div>
      </div>
      <div>
        <div className="parallax parallax-box section" id="containerBox">
          <div className="">
            <div className="row">
              <h1 className="btn btn-light btn-circle btn-xl" id="wholeCirlce">
                <h1 className="rocketBox">
                  <FaRocket />
                </h1>
              </h1>
              <div className="row">
                <div className="projectsDone" id="projectsDone">
                  
                  <h1>12 </h1>
                  <h2>Projects done</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="btn btn-light btn-circle btn-xl" id="wholeCirlce">
              <h1 className="rocketBox">
                <IoIosPeople />
              </h1>
            </h1>
            <div className="row">
              <div className="projectsDone" id="projectsDone">
                
                <h1>55 </h1>
                <h2>Happy clients

</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="btn btn-light btn-circle btn-xl" id="wholeCirlce">
              <h1 className="rocketBox">
                <RiCupFill />
              </h1>
            </h1>
            <div className="row">
              <div className="projectsDone" id="projectsDone">
                
                <h1>360 </h1>
                <h2>Cups of coffee</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <h1 className="btn btn-light btn-circle btn-xl" id="wholeCirlce">
              <h1 className="rocketBox">
                <AiTwotoneTrophy />
              </h1>
            </h1>
            <div className="row">
              <div className="projectsDone" id="projectsDone">
                
                <h1>10</h1>
                <h2>Awards
</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<section id="price" className="section">
        <div className="container">
          <div className="title-block mx-auto">
            <div className="section_title text-center" id="scroll-title">
            <h1>
            Best Pricing Plan
            </h1>
            <span
            data-enllax-ratio="2.5"
            data-enllax-type="foreground"
            data-enllax-direction="horizontal"
          >
             Best Pricing Plan
          </span>

            </div>
          </div>
        </div>
      </section>*/}
    </>
  );
};

export default Home;
