import React from 'react';
import arrow from '../assets/arrow-left.svg'
import Burger from '../assets/Burger.png'
import Bill from '../assets/bill.svg'
import Burger2 from '../assets/Burger2.png'
import Map from '../assets/maps.svg'


export default function ChekoutPage(){

    return(
        <div className= " bg-gray-100 min-h-screenp p-4" >

           <div className= "bg-white rounded-lg shadow-sm p-4" > 
          <div className='p-4 border-b border-grayy-200 flex items-center' >
          <img
          src = <arrow/>
          alt = "Back"
         calss name
         />
         </div>
    </div>

          <div className='flex items-left min-h-screen p-8 '>
          <div className= 'bg-gray-200 rounded-lg shadow-md p-4 flex-1 justyfy-center items-left'>
          <div className='flex items-left'>
          <img className='"w-10 h-10 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" '
          src = <Burger/>
          alt = "Burger"
          />
          <blockquote >
          <p  class ="text-sm text-gray-500 font-monorepo" >
          Caribbean Spicy Zinger Burger
          </p>
          <p class= "text-sm text-gray-400 font-monorepo">
          350kcl
          </p>
          <p class = "text-sm text-gray-400 font-monorepo">
          319 Rupees
          </p>
          </blockquote>

          <div className='flex items-left min-h-screen p-8 '>
          <div className= 'bg-gray-200 rounded-lg shadow-md p-4 flex-1 justyfy-center items-left'>
          <div className='flex items-left'>
          <img className='"w-10 h-10 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" '
          src = <Burger2/>
          alt = "Burger2"
          />
          <blockquote >
          <p  class ="text-sm text-gray-500 font-monorepo" >
          Cajun Veg Burger
          </p>
          <p class= "text-sm text-gray-400 font-monorepo">
          350kcl
          </p>
          <p class = "text-sm text-gray-400 font-monorepo">
          319 Rupees
          </p>
          </blockquote>

        </div>
        </div>
          </div>              
           </div>
        </div>

        <div classname= "flex items-left min-h-screen p-12 ">
            <img src="<Map/>map.svg" alt="" />
        </div>

        <div className='flex items-left min-h-screen p-8'>
        <blockquote className='flex items-right  min-h-screen'>

        </blockquote>

        </div>





        
         </div>"




        </div>

    )



}



