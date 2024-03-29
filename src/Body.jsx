import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import { AiOutlineGlobal, AiOutlineRight } from "react-icons/ai";
const Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handledrop = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="box2">
      <div className="container">
        <div className="box2-1-sm">
          <div className="box2-1-heading">
            <h1>Enjoy on your TV</h1>
            <h4>Watch on smart TVs, Playstation, Xbox, </h4>
            <h4>Chromecast, Apple TV, Blu-ray players, and more. </h4>
          </div>
          <div className="img">
            <img
              className="img-fluid"
              src={img1}
              alt="img1"
              width="500px"
              height="400px"
            />
          </div>
        </div>
        <div className="box2-1">
          <div className="box2-1-heading">
            <h1>Enjoy on your TV</h1>
            <h4>Watch on smart TVs, Playstation, Xbox, </h4>
            <h4>Chromecast, Apple TV, Blu-ray players, and more. </h4>
          </div>
          <div className="img">
            <img
              className="img-fluid"
              src={img1}
              alt="img1"
              width="500px"
              height="400px"
            />
          </div>
        </div>
        <div className="border"></div>

        <div className="box2-1-sm">
          <div className="img">
            <img
              className="img-fluid"
              src={img2}
              alt="img2"
              width="500px"
              height="400px"
            />
          </div>
          <div className="box2-1-heading">
            <h1>Watch everywhere</h1>
            <h4>Stream unlimited movies and TV shows on your </h4>
            <h4>phone, tablet, laptop, and TV.</h4>
          </div>
        </div>
        <div className="box2-1">
          <div className="img">
            <img
              className="img-fluid"
              src={img2}
              alt="img2"
              width="500px"
              height="400px"
            />
          </div>
          <div className="box2-1-heading">
            <h1>Watch everywhere</h1>
            <h4>Stream unlimited movies and TV shows on your </h4>
            <h4>phone, tablet, laptop, and TV.</h4>
          </div>
        </div>
        <div className="border"></div>

        <div className="box2-1-sm">
          <div className="box2-1-heading">
            <h1>Create profiles for kids</h1>
            <h4>Send kids on adventures with their favorite </h4>
            <h4>
              characters in a space made just for them—free with your
              membership.{" "}
            </h4>
          </div>
          <div className="img">
            <img
              className="img-fluid"
              src={img3}
              alt="img3"
              width="500px"
              height="400px"
            />
          </div>
        </div>
        <div className="box2-1">
          <div className="box2-1-heading">
            <h1>Create profiles for kids</h1>
            <h4>Send kids on adventures with their favorite </h4>
            <h4>characters in a space made just for them—free </h4>{" "}
            <h4>with your membership. </h4>
          </div>
          <div className="img">
            <img
              className="img-fluid"
              src={img3}
              alt="img3"
              width="500px"
              height="400px"
            />
          </div>
        </div>
        <div className="border"></div>
        <div className="box2-1-sm">
          <div className="img">
            <img
              className="img-fluid"
              src={img4}
              alt="img4"
              width="500px"
              height="400px"
            />
          </div>
          <div className="box2-1-heading">
            <h1>Download your shows to watch offline</h1>
            <h4>Only available on ad-free plans.</h4>
          </div>
        </div>
        <div className="box2-1">
          <div className="img">
            <img
              className="img-fluid"
              src={img4}
              alt="img4"
              width="500px"
              height="400px"
            />
          </div>
          <div className="box2-1-heading">
            <h1>Download your shows </h1>
            <h1> to watch offline</h1>
            <h4>Only available on ad-free plans.</h4>
          </div>
        </div>
      </div>

      <div className="lastpage">
        <h1>Frequently Asked Questions</h1>
        <div className="container">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item text-white ">
              <h2 className="accordion-header text-white" id="flush-headingOne">
                <button
                  className="accordion-button collapsed text-white bg-"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is Netflix?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse "
                data-bs-parent="accordionFlushExample"
              >
                <div class="accordion-body">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want - all for one low monthly
                  price. There's always something new to discover and new TV
                  shows and movies are added every week!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                >
                  How much does Netflix cost?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="accordionFlushExample"
              >
                <div className="accordion-body">
                  Watch Netflix on your smartphone, tablet, smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from $6.99 to $19.99 a month. No extra costs, no contracts.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                >
                  Where can I watch?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="accordionFlushExample"
              >
                <div className="accordion-body">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favorite shows with the iOS, Android, or Windows
                  10 app. Use downloads to watch while you're on the go and
                  without an internet connection. Take Netflix with you
                  anywhere.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                >
                  How do I cancel?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="accordionFlushExample"
              >
                <div class="accordion-body">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                >
                  What can I watch on Netflix?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="accordionFlushExample"
              >
                <div class="accordion-body">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                >
                  Is Netflix good for kids?
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="accordionFlushExample"
              >
                <div class="accordion-body">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don't want kids to see.
                </div>
              </div>
            </div>
          </div>

          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="ebox">
            <input
              type="text"
              class="form-control"
              placeholder="Email address"
            ></input>
            <button class="btn" type="button">
              Get Statrted <AiOutlineRight />
            </button>
          </div>
          <p>Questions? Call 1-844-505-2993</p>
          <div className="lbox-sm">
            <ul className="list1">
              <li>
                {" "}
                <a href="#">FAQ</a>
              </li>
              <li>
                {" "}
                <a href="#">Investor Relations</a>
              </li>
              <li>
                {" "}
                <a href="#">Buy Gift Cards</a>
              </li>
              <li>
                {" "}
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                {" "}
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Help Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Jobs</a>
              </li>
              <li>
                {" "}
                <a href="#">Way to Watch</a>
              </li>
              <li>
                {" "}
                <a href="#">Corporate Information</a>
              </li>
              <li>
                {" "}
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Account</a>
              </li>
              <li>
                {" "}
                <a href="#">Netflix Shop</a>
              </li>
              <li>
                {" "}
                <a href="#">Terns of Use</a>
              </li>
              <li>
                {" "}
                <a href="#">Contact Us</a>
              </li>
              <li>
                {" "}
                <a href="#">Do not Sell or share My Personal</a>
              </li>

              <li>
                <a href="#">Information</a>
              </li>
            </ul>
            <ul className="list4">
              <li>
                {" "}
                <a href="#">Media Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Redeem Gift Cards</a>
              </li>
              <li>
                {" "}
                <a href="#">Privacy</a>
              </li>
              <li>
                {" "}
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="lbox">
            <ul className="list1">
              <li>
                {" "}
                <a href="#">FAQ</a>
              </li>
              <li>
                {" "}
                <a href="#">Investor Relations</a>
              </li>
              <li>
                {" "}
                <a href="#">Buy Gift Cards</a>
              </li>
              <li>
                {" "}
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                {" "}
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Help Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Jobs</a>
              </li>
              <li>
                {" "}
                <a href="#">Way to Watch</a>
              </li>
              <li>
                {" "}
                <a href="#">Corporate Information</a>
              </li>
              <li>
                {" "}
                <a href="#">Only on Netflix</a>
              </li>
            </ul>
            <ul className="list2">
              <li>
                {" "}
                <a href="#">Account</a>
              </li>
              <li>
                {" "}
                <a href="#">Netflix Shop</a>
              </li>
              <li>
                {" "}
                <a href="#">Terns of Use</a>
              </li>
              <li>
                {" "}
                <a href="#">Contact Us</a>
              </li>
              <li>
                {" "}
                <a href="#">Do not Sell or share My Personal</a>
              </li>

              <li>
                <a href="#">Information</a>
              </li>
            </ul>
            <ul className="list4">
              <li>
                {" "}
                <a href="#">Media Center</a>
              </li>
              <li>
                {" "}
                <a href="#">Redeem Gift Cards</a>
              </li>
              <li>
                {" "}
                <a href="#">Privacy</a>
              </li>
              <li>
                {" "}
                <a href="#">Speed Test</a>
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <button className="btn dropdown-toggle" onClick={handledrop} type="button">
            <AiOutlineGlobal size={28}/> English
            </button>

            {isOpen ? (
              <div className="dropmenu">
                <a className="dropdown-item">English</a>
                <a className="dropdown-item">Espanol</a>
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
