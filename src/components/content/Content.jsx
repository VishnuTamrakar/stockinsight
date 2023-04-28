import React from 'react'
import './content.css'


const Content = () => {
    
    
  return (
    <>
      <div className="content">
        
            <h1 className='heading'>Welcome!</h1>
            <span className='subHeading'>You can now ask questions to search through Earnings Calls Transcripts of Public Companies!</span>
            <span className='betaHeading'>Please note: This is a beta version. We are in the progress of adding more data and improving the search</span>
            <div className="searchBox">
                <div className="selector">
                    <h1>Search With:</h1>
                    <div className="multiSelect">
                        <select>
                            <option className='option' value=""> <input type='checkbox'/> Q2 FY23 </option>
                            <option value=""> <input type='checkbox'/> Q1 FY23 </option>
                            <option value=""> <input type='checkbox'/> Q4 FY22 </option>
                            <option value=""> <input type='checkbox'/> Q3 FY22 </option>
                            <option value=""> <input type='checkbox'/> Q32 FY22 </option>
                        </select>                      
                    </div>
                    <div className="multi">
                        <select>
                            
                            <option  value=""> <input type='checkbox'/> OLECTRA </option>
                            <option value=""> <input type='checkbox'/> TATAMOTORS </option>
                            <option value=""> <input type='checkbox'/> ASHOKLEY </option>
                            <option value=""> <input type='checkbox'/> JBMA </option>
                            <option value=""> <input type='checkbox'/>  EICHERMOT </option>
                        </select>
                    </div>
                </div>
            <div className="search">
            <i class="fa fa-search icon" aria-hidden="true"></i>
            <input type="search" placeholder='Enter any search' />

            </div>
            </div>
       
      </div>
    
    </>
  )
}

export default Content
