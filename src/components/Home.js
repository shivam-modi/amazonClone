import React from 'react'
import Product from '../modals/Product'
import './home.css'

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
              <img className="homeImage" src="https://images-fe.ssl-images-amazon.com/images/G/65/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-SG_FT_PVD6153._CB416181995_.jpg" alt=""/>
              <div className="homeRow">
                   <Product 
                     id="12345"
                     title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                     price={29.99}
                     image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UL480_QL65_.jpg"
                     rating={4}
                   />
                   <Product
                    id="123456"
                    title="TCL Active Noise Cancelling Headphones, MTRO200NC Wireless Bluetooth Headphones On-Ear Lightweight Stereo Headphones with Powerful Bass"
                    price={120.50}
                    image="https://m.media-amazon.com/images/I/61pRR8YhmYL._AC_UY327_QL65_.jpg"
                    rating={5} 
                   />
              </div>
              <div className="homeRow">
                  <Product
                    id="123457"
                    title="All-new Echo Dot (4th Gen) with clock | Next generation smart speaker with improved bass, LED display and Alexa (White)"
                    price={63.5}
                    image="https://m.media-amazon.com/images/I/61AAiJ9LJ+L._AC_UY327_QL65_.jpg"
                    rating={4}
                  />
                  <Product
                    id="123458"
                    title='ASUS ROG Zephyrus Duo 15, 15.6" FHD 300Hz/3ms, Intel Core i9-10980HK 10th Gen, RTX 2080'
                    price={5200.76}
                    image="https://m.media-amazon.com/images/I/8189czxRlUL._AC_UY327_QL65_.jpg"
                    rating={4}
                  />
                  <Product
                    id="123459"
                    title="Motorola Razr (Gold, 128 GB) (6 GB RAM)"
                    price={350.78}
                    image="https://m.media-amazon.com/images/I/41ATfn4H+aL._AC_UY327_QL65_.jpg"
                    rating={3}
                  />
              </div>
              <div className="homeRow">
                   <Product
                     id="123460"
                     title="LG 25-inch (63.5 cm) UltraWide Multitasking Monitor with Full HD  (2560 x 1080) IPS Panel, HDMI Port, AMD Freesync - 25UM58 (Black)"
                     price={720.23}
                     image="https://m.media-amazon.com/images/I/81pv0g8bQhL._AC_UY327_QL65_.jpg"
                     rating={3}
                   />
              </div>
            </div>
        </div>
    )
}

export default Home
