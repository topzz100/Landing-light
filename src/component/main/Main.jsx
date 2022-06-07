import React from 'react'
import './main.css'

const Main = () => {
  return (
    <div className="main">

      <div className="header">
        <div className="headerLeft">
          <p className='payment'>Payment Information</p>
          <p className='choose'>Choose your method of payment</p>
        </div>
        <div className="headerRight">
          <div className="payIcon">
            <img src="./images/visa.png" alt="" />
          </div>
          <div className="payIcon">
            <img src="./images/discover.jpg" alt="" />
          </div>
          <div className="payIcon">
            <img src="./images/paypal.png" alt="" />
          </div>
        </div>
      </div>


      <div className="top">
        <div className="topLeft">
          <img src="./images/credit.jpg" alt="" />
        </div>

        <div className="topRight">
          <form action="">
            <div className="row">
              <div className="formGroup">
                <label htmlFor="card">
                  Credit Card Number
                </label>
                <input type="text"  id='card' placeholder='4324 5433 9382 1030'/>
              </div>
              <div className="formGroup">
                <label htmlFor="exp">
                  Expiration date
                </label>
                <input type="text" id='exp'placeholder='03/24' />
              </div>
            </div>
            <div className="row">
              <div className="formGroup">
                <label htmlFor="sec">
                  Security Code
                </label>
                <input type="text" id='sec' placeholder='420'/>
              </div>
              <div className="formGroup">
                <label htmlFor="postal">
                  Postal Code
                </label>
                <input type="text" id='postal' placeholder='10119'/>
              </div>
            </div>
            <div className="radio" >
              <input type="checkbox" name="" id="check" />
              <label class="container" htmlFor='check'>
                Use this card for next time purchase
              </label>
            </div>
            <button className='btn'>
              Add Card
            </button>
          </form>
        </div>
      </div>


       <div className="bottom">
        <div className="payItem">
          <span className='item'>
            SubTotal
          </span>
          <span>
            <span>&#8358;</span>
            2,497.00
          </span>
        </div>
        <div className="payItem">
          <span className='item'>
            Estimated TAX
          </span>
          <span>
            <span>&#8358;</span>
            119.64
          </span>
        </div>
        <div className="payItem">
          <span className='item'>
            Promotional Code:
            <span className='light'> Z4KXLM9A</span>
          </span>
          <span>
            <span>&#8358;</span>
            -60.00
          </span>
        </div>
      </div>
      
      <div className="bottomTotal">
        <button className='btnTotal'>
          Complete Payment
        </button>
        <div className="totalLeft">
          <span>
            TOTAL:
            <span> &#8358;2556.64</span>
          </span>
        </div>
      </div>
      
     
    </div>
  )
}

export default Main