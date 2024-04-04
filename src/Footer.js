import React from 'react'
import './Footer.css';
function Footer() {
  return (
   <div className='footerarea'>
    <div className='footerarea__top'>
        <p>Back to top</p>
    </div>
    <div className='footerarea__links'>
        <div className='footerarea__linkarea'>
            <h4>Get to know Us</h4>
            
            <span>Careers</span>
            <span>Blog</span>
            <span>About Amazon</span>
            <span>Investor Relations</span>
            <span>Amazon Devices</span>
            <span>Amazon Science</span>
            
            
        </div>
        <div className='footerarea__linkarea'>
        <h4>Make Money with Us</h4>
            
                <span>Sell products on Amazon</span>
                <span>Sell on Amazon Business</span>
                <span>Sel Apps on Amazon</span>
                <span>Become an Affiliate</span>
                <span>Advertise Your Products</span>
                <span>Self-Publish with Us</span>
                <span>Host an Amazon Hub</span>
            
            
        </div>
        <div className='footerarea__linkarea'>
        <h4>Amazon Payment Products</h4>
    
                <span>Amazon Business Card</span>
                <span>Shop with Points</span>
                <span>Reload Your Balance</span>
                <span>Amazon Currency Converter</span>
                
                        
        </div>
        <div className='footerarea__linkarea'>
        <h4>Let Us Help You </h4>
            
                <span>Amazon and COVIS-19</span>
                <span>Your Account</span>
                <span>Your Orders</span>
                <span>Shippong Rates & Politics</span>
                <span>Returns & Replacements</span>
                <span>Manage Your Content and Devices</span>
                <span>Amazon Assitant</span>
                <span>Help</span>
        </div>
        
    </div>
    <hr/>
    <div className='footer_hr'>
        <div className='alltext'>
        <img  className='nav_image' src='/img/Amazon_logo.png'alt=''/>
        <p>$ USD-U.S Dollar</p>
        <div className='outerdiv'>
         <img className='pkimg' src='data:image/png;base64,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'/>
         <p >Pakistan</p>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Footer
