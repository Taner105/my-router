import React from 'react'
import {data} from "./data"


const Home = () => {
    return (
        <div className='homePage'>
          {
              data.map((veri, index) => {
                  return(
                      <div key={index}>
                          <div>
                              {veri.title}
                          </div>
                          <div>
                              <img style={{width:200 ,heigth:200}} src={veri.image} alt="" />
                          </div>
                      </div>
                  )
              })
          }
        </div>
    )
}

export default Home;
