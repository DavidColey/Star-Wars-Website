import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex-container">
    <div className="flex-item">
      <Link to="/ep1">
        <button className="buttonformat" title="Learn More" color="#841584">
          Episode I: The Phantom Menance
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep2">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"

          //accessibilityLabel="Learn more about this purple button"
        >
          Episode II: Attack of the Clones
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep3">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        >
          Episode III: Revenge of the Sith
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep4">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        >
          Episode IV: A New Hope
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep5">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        >
          Episode V: The Empire Strikes Back
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep6">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        >
          Episode VI: Return of the Jedi
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep7">
        <button
          className="buttonformat"
          title="Learn More"
          color="#841584"
          //accessibilityLabel="Learn more about this purple button"
        >
          Episode VII: The Force Awakens
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
