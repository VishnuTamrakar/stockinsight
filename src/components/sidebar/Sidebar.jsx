import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
        <h1>Source Data:</h1>
        <p>Earning Call Transcript</p>

        </div>
        <div className="bottom">

        <h1>Search Limited To:</h1>
        <div className="list">
          <ul>
          <li>OLECTRA</li>
          <li>TATAMOTORS</li>
          <li>Q2 FY23</li>
          </ul>

        </div>

          <h1>Found Result In:</h1>
          <div className="secondList">
            <ul>
          <li>OLECTRA</li>
          <li>TATAMOTORS</li>
          <li>ASHOKLEY</li>
          <li>JBMA</li>
          <li>ECHERMOT</li>
          <li>M&M</li>
          <li>CEATLTD</li>
          </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
