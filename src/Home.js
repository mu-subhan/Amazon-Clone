import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
      <img className='home__image'
      src='https://m.media-amazon.com/images/I/71KfZkbgStL._SX3000_.jpg'alt='pic'/>
    <div className='home__row'>

    <Product 
      id='121316'
      title='Home décor'
      price={10.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg'
      />
      <Product 
      id='1213'
      title='Refresh your space'
      price={15.1}
      rating={5}
      image='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg'
      />
      <Product 
      id='316'
      title='The Lean Startup: Now Contant Innovation'
      price={19.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg'
      /> 
      </div>
      <div className='home__row'>
      <Product 
      id='121316'
      title='Toys '
      price={25.23}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
      />
      <Product 
      id='121316'
      title='Laptops for every need'
      price={10.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg'
      />
      <Product 
      id='1213'
      title='Watch Collections'
      price={15.1}
      rating={5}
      image='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg'
      />
      <Product 
      id='316'
      title='Perfumes for you'
      price={19.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg'
      /> 
      </div>
      <div className='home__row'>
      <Product 
      id='1213'
      title='Amazon gudjets store'
      price={15.1}
      rating={5}
      image='https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_Oct_Wreaths_Decor_QuadCard_D_01_186x116._SY116_CB596234042_.jpg'
      />
      <Product 
      id='316'
      title='Upgrade your office furniture'
      price={19.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg'
      />  
     
 

      <Product 
      id='316'
      title='Upgrade your office furniture'
      price={19.21}
      rating={4}
      image='https://images-na.ssl-images-amazon.com/images/G/01/img22/Events/Fall23/FALL23_HP_Oct_Decor_QuadCard_D_04_186x116._SY116_CB596234042_.jpg'
      />  '
     
     

    </div>
    
    </div>
  )
}

export default Home
