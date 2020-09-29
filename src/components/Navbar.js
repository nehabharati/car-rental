import React, { useState } from 'react'
import {NavLink} from 'react-router-dom' 

function Navbar() {
    const [open,setOpen] = useState(false)
    return (
        <div className="text-gray-800">
             <header className="bg-white sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center shadow-md">
                <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                    <div>
                        <img onClick={() => window.location = "/"} className="w-1/2 z-50 bg-black cursor-pointer" src={require("../images/carbook.png")} alt="carbook logo" />
                    </div>

                    {/* Hamburger icon visible for small screens */}
                    <div className="sm:hidden">
                        <button type="button" aria-label="open navbar" className="text-gray-800 focus:text-gray-800 focus:outline-none hover:text-black" onClick={() => setOpen(!open)}>
                            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                                {open && <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>}
                                {!open && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>}
                            </svg>
                        </button>
                    </div>
                </div>
                 
                {/* Hamburger icon hidden for big screens */}
                <div className={`${open ? `block` : `hidden`} px-2 pt-2 pb-5 sm:flex`} >
                    <NavLink exact activeClassName="active" to="/" className="block cursor-pointer uppercase border-b-2 border-transparent hover:border-gray-700 px-8 py-1  rounded ">Home</NavLink>
                    <NavLink  activeClassName="active" to="/catalog" className="block cursor-pointer uppercase border-b-2 border-transparent hover:border-gray-700 px-8 py-1 mt-1 rounded sm:mt-0 sm:ml-2">Catalog</NavLink>
                    <NavLink  activeClassName="active" to="/booking" className="block cursor-pointer uppercase border-b-2 border-transparent hover:border-gray-700 px-8 py-1 mt-1 rounded sm:mt-0 sm:ml-2">Book</NavLink>
                </div> 
            </header> 
        </div>
    )
}

export default Navbar