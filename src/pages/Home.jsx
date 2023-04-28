import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import './home.css'
import Content from '../components/content/Content'

const Home = () => {
  return (
      <>
             <Header/>      
      <div className="home">              
            <Sidebar/>        
        <div className="homeContainer">
            <Content/>
        </div>
      </div>
       </>
      
    
  )
}

export default Home
