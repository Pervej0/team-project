import React, { useEffect, useState } from "react";
import './About.css'
import Counter from "./Counter";
import Reviews from "./Reviews/Reviews";
import Volunteer from "./Volunteer";

const About = () => {
  const [volunterrs, setVolunteers] = useState([])
  const [counters, setCounters] = useState([])

  useEffect(() => {
    fetch('./volunteer.json')
      .then(res => res.json())
      .then(data => setVolunteers(data))
  }, [])

  useEffect(() => {
    fetch('./counter.json')
      .then(res => res.json())
      .then(data => setCounters(data))
  }, [])


  return (
    <div>
      <div className="about-header">
        <h2 className="text-4xl text-center text-white font-bold ">About Us</h2>
      </div>
      <div className="container mx-auto py-10 px-3">
        <div>
          <h2 className="about-heading text-center text-4xl font-medium">OUR VOLUNTEERS</h2>
          <p className="text-xl text-center pt-8">The volunteers who give their time and talents help to fulfill our mission.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-20 mx-auto">
          {
            volunterrs.map(volunterr => <Volunteer
              key={volunterr.name}
              volunterr={volunterr}
            ></Volunteer>)
          }
        </div>
      </div>
      <div className="counter-area mt-20">
        <div className="container mx-auto p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4  mx-auto">
            {
              counters.map(counter => <Counter
                key={counter.name}
                counter={counter}
              ></Counter>)
            }
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};



export default About;
