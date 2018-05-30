import React from "react";
import { Link } from "react-router-dom";
import ep1logo from "./pics/Phantom menance.png";

const Home = () => (
  <div className="flex-container">
    <div className="flex-item">
      <Link to="/ep1">
        <button className="buttonformat">Episode I: The Phantom Menance</button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep2">
        <button className="buttonformat">
          Episode II: Attack of the Clones
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep3">
        <button className="buttonformat">
          Episode III: Revenge of the Sith
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep4">
        <button className="buttonformat">Episode IV: A New Hope</button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep5">
        <button className="buttonformat">
          Episode V: The Empire Strikes Back
        </button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep6">
        <button className="buttonformat">Episode VI: Return of the Jedi</button>
      </Link>
    </div>

    <div className="flex-item">
      <Link to="/ep7">
        <button className="buttonformat">Episode VII: The Force Awakens</button>
      </Link>
    </div>
  </div>
);

export default Home;
