import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="grid-container">
    <div className="grid-item">
      <Link to="/films">
        <button className="buttonformat" title="Learn More" color="#841584">
          {" "}
          Episode I: The Phantom Menance
        </button>{" "}
      </Link>
    </div>
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"

        //accessibilityLabel="Learn more about this purple button"
      >
        Episode II: Attack of the Clones
      </button>
    </div>
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
      >
        Episode III: Revenge of the Sith
      </button>
    </div>
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
      >
        Episode IV: A New Hope
      </button>
    </div>
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
      >
        Episode V: The Empire Strikes Back
      </button>
    </div>
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
      >
        Episode VI: Return of the Jedi
      </button>
    </div>
    <div className="grid-item" />
    <div className="grid-item">
      <button
        className="buttonformat"
        title="Learn More"
        color="#841584"
        //accessibilityLabel="Learn more about this purple button"
      >
        Episode VII: The Force Awakens
      </button>
    </div>
  </div>
);

export default Home;
