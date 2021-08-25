import React from 'react'
import "./Home.css"
import Product from "./Product"

export default function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img  
                    className = "home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                />
                
                <div className="home_row">
                    <Product 
                    id= {1} 
                    title="The Lean Startup" 
                    price={29.99} 
                    image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg" 
                    rating={3}/>
                    
                    <Product 
                    id= {2} 
                    title="Ryzen 7 Processor"
                    price={280.99}
                    image="https://m.media-amazon.com/images/I/61DYLoyNRWL._AC_SL1384_.jpg"
                    rating={3}
                    
                    />
                    
                    
                </div>

                <div className="home_row">
                    <Product
                    id= {3}  
                    title= "Samsung Galaxy S21 5G | Factory Unlocked Android Cell Phone"
                    price={999.99}
                    image="https://m.media-amazon.com/images/I/51rQZN9RahL._AC_SL1000_.jpg"
                    rating={4}
                    />
                    <Product
                    id= {4} 
                    title ="Sunny Days Entertainment Large Police Car – Lights and Sounds Vehicle with Motorized Drive and Soft Grip Tires"
                    price={19.99}
                    image="https://m.media-amazon.com/images/I/912ZSagjzAL._AC_SL1500_.jpg" 
                    rating={3}
                    />
                    <Product 
                    id= {5} 
                    title="JOYIN 10 in 1 Die-cast Police Patrol Rescue Truck Mini Police Vehicles Truck Toy Set in Carrier Truck"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81JlUXLcxnL._AC_SL1500_.jpg"
                    rating={5}
                    />
                    
                </div>
                
                <div className="home_row">
                    <Product 
                    id= {6} 
                    title= "Gaming Monitor 32in"
                    price={349.99}
                    image="https://m.media-amazon.com/images/I/71eZx8RnyoL._AC_SL1500_.jpg"
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}


