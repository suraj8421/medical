import React from "react";
import "./Home.css";
import homeImg from "../assets/home-img.jpg";
import doctor from "../assets/dr.jpeg";
import family from "../assets/family.jpg";
import time from "../assets/24-7.jpg";
import lab from "../assets/lab.webp"
import heart from "../assets/heart.jpeg"
import digno from "../assets/digno.jpg"
import child from "../assets/child.webp"

const Home = () => {
  return (
    <>
      <div className="container-fluid mt-2 mb-5 ">
        <img className="home-img" src={homeImg} alt="img" />
      </div>
      <div className="container">
        <div className="card col-md-4 home-card">
          <h3 className="text-center title">Make an appointment</h3>
          <p className="text-center">
            Please fill following details to make appointment
          </p>
          <form className="from">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Your Phone Number"
              />
            </div>
          </form>
          <p className="text-center">
            {" "}
            Hurry up we have limited amount of appointments{" "}
          </p>
          <button type="submit" className="btn btn-primary mt-3 mb-3 submit">
            Submit
          </button>
        </div>
      </div>

      <div className="container">
        <h3 className="subtitle">Why choose our Clinic</h3>
        <p className="info">
          {" "}
          Here are few resons why Medical is the area's healthe care providers
          choice
        </p>
      </div>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="col-md-4">
            <img className="img1" src={doctor} alt="" />
            <h4 className="text1">Professional Doctors</h4>
            <p className="info">
              Our clinic hires experienced and well certified doctors and nurse
            </p>
          </div>
          <div className="col-md-4">
            <img className="img1" src={family} alt="" />
            <h4 className="text1">Family medicine</h4>
            <p className="info">
              We provide a wide variety of family medicine services including
              hospital care
            </p>
          </div>
          <div className="col-md-4">
            <img className="img1" src={time} alt="" />
            <h4 className="text1">24/7 patient support</h4>
            <p className="info">
              Our clinic provides medical support and healthcare service 24/7
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid services">
        <h2 className="text-center mt-5"> Our Service</h2>
        <p className="text-center info">
          {" "}
          We offer complete healthcare to individuals with various health
          concerns
        </p>
        <div className="container mt-5">

        
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img className="img2" src={heart} alt="heart" />
              <h4 className="text-center">Heart Care Programs</h4>
              <p className="info">
                we provide everything you need to maintain a healthy heart all time
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img2" src={child} alt="child" />
              <h4 className="text-center">Pregnancy & Child Birth</h4>
              <p className="info">
                we provide everything you need to maintain a healthy heart all time
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img2" src={lab} alt="lab" />
              <h4 className="text-center">Laboratory Analysis</h4>
              <p className="info">
                we provide everything you need to maintain a healthy heart all time
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img className="img2" src={digno} alt="digno" />
              <h4 className="text-center">Imaging & Diagnostics</h4>
              <p className="info">
                we provide everything you need to maintain a healthy heart all time
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
          <video className="video" controls width="500" height="300">
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
          <div className="col-md-6">
          <h2 className="text-center watch-text">Watch This Video</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
