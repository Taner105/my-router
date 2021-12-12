import React from 'react'
import {data} from "./data"
import "../pages/Home.css"


const Home = () => {
    return (
        <div className='homePage'>
          {
              data.map((veri, index) => {
                  return(
                      <div className='home' key={index}>
                          <div>
                              {veri.title}
                          </div>
                          <div className='imgP'>
                              <img src={veri.image} alt="" />
                              <p>{veri.desc}</p>
                          </div>
                      </div>
                  )
              })
          }
        </div>
    )
}

export default Home;
