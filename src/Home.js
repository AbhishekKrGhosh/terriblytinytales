import React from 'react';
import Navigation from './Navigation';
import "./Home.css"
import { Link } from 'react-router-dom';

function Home() {
  return (<div><Navigation/><section>
  <div className="Colour" ></div>
  <div className="Colour"></div>
  <div className="Colour"></div>
  <div className="Box">
      <div className="Square"></div>
      <div className="Square" ></div>
      <div className="Square" ></div>
      <div className="Square" ></div>
      <div className="Square" ></div>
      <div className="Container">
          <div className="Form">
            <button className="box"><Link className='plain-link' to="/download">SUBMIT</Link></button>
          
          </div>
      </div>
  </div>
</section></div>);
}

export default Home;