import { useState } from 'react'
import './App.css'

import React from 'react'
function Docter(){
    return(
       <>
       {/* NAVBAR */}
        <nav className='h-20 bg-slate-900 text-white'>home</nav>

        {/* MAIN CONTENT */}
        <main className='p-8 w-full h-screen'>
            <section className='max-w-screen-lg mx-auto '>
            <h1 className='font-extrabold text-4xl my-5'>Available docters</h1>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2  mx-auto'>

                    {/* 1st CARD */}
                    <div className=' card-container pr-2 flex flex-row justify-between items-center gap-2  shadow-lg w-fit'>
                        <img className='h-48 w-48' src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className='text-xl md:text-2xl'>
                            <h2 className='my-2'>Name</h2>
                            <h3 className='my-2'>MBBS DGO MD</h3>
                            <p className='my-2'>Tuesday and fridwy</p>
                            <p className='my-2'>10:00Am to 12:00PM</p>
                            
                        </div>
                    </div>

                    {/* 2nd card */}
                    <div className=' card-container pr-2 flex flex-row justify-between items-center gap-2 shadow-lg w-fit'>
                        <img className='h-48 w-48' src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className='text-xl md:text-2xl'>
                            <h2 className='my-2'>Name</h2>
                            <h3 className='my-2'>MBBS DGO MD</h3>
                            <p className='my-2'>Tuesday and fridwy</p>
                            <p className='my-2'>10:00Am to 12:00PM</p>
                            
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </main>


        {/* FOOTER */}
        <footer className='h-20 bg-black text-white'>
            <p>home</p>
            <p>copyeifjgtns</p>
        </footer>


</>
    )
}

export default Docter