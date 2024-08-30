import React from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import burger1 from '../assets/Burger.png';
import burger2 from '../assets/burger2.png';
import fanta from '../assets/Fanta.png';
import bill from '../assets/bill.svg';

export default function CheckoutPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="p-4 border-b border-gray-200 flex items-center">
          <img 
            src={arrowLeft} 
            alt="Back" 
            width={24} 
            height={24} 
          />
          <div className="ml-4">
            <h1 className="text-xl font-semibold">Checkout</h1>
            <p className="text-xs text-orange-500">POPEYES | JP NAGAR</p>
          </div>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img 
                src={burger1} 
                alt="Caribbean Spicy Zinger Burger" 
                width={80} 
                height={80} 
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-sm">Caribbean Spicy Zinger Burger</h2>
                <p className="text-xs text-gray-500">350 Kcal</p>
                <p className="font-semibold text-sm">₹ 319</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full border border-gray-300 px-2 py-1">
              <button className="text-orange-500 text-xl font-semibold">-</button>
              <span className="w-6 text-center text-sm">1</span>
              <button className="text-orange-500 text-xl font-semibold">+</button>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center space-x-3">
              <img 
                src={burger2} 
                alt="Cajun Veg Burger" 
                width={80} 
                height={80} 
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="font-semibold text-sm">Cajun Veg Burger</h2>
                <p className="text-xs text-gray-500">250 Kcal</p>
                <p className="font-semibold text-sm">₹ 219</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full border border-gray-300 px-2 py-1">
              <button className="text-orange-500 text-xl font-semibold">-</button>
              <span className="w-6 text-center text-sm">2</span>
              <button className="text-orange-500 text-xl font-semibold">+</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-sm mb-2">Frequently Ordered</h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex-shrink-0 w-28 bg-gray-50 p-2 rounded-lg">
                  <img 
                    src={fanta} 
                    alt="Fanta" 
                    width={76} 
                    height={140} 
                    className="w-full h-36 object-contain rounded-lg mb-2"
                  />
                  <p className="text-xs font-semibold">Fanta - 1 PET</p>
                  <p className="text-xs">₹ 89</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div className="flex items-center text-gray-600">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2">
                <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#F05A26" strokeWidth="1.5"/>
                <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#F05A26" stroke="#F05A26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-xs">Delivery to 23rd Avenue, JP Nagar, Bangalore</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600">
                <img 
                  src={bill} 
                  alt="Bill" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 mr-2"
                />
                <p className="text-sm font-semibold">Total Bill</p>
              </div>
              <p className="font-semibold">₹ 538</p>
            </div>
            <p className="text-xs text-gray-500">Including Taxes</p>
          </div>
        </div>
        
        <div className="p-4">
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold text-sm">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  )
}