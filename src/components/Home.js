import React from 'react'

export default function Home() {
    function goto() {
        window.location = "/catalog"
    }

    return (
        <div >
            <div className="flex sm:flex sm:flex-row text-gray-800">
                <div className="hidden h-full object-cover bg-black sm:block sm:bg-black sm:h-screen sm:w-1/2 sm:object-cover">
                    <img className="mt-64" src={require("../images/car.jpg")} alt="black car" />
                </div>
                <div className="px-16 py-6 flex items-center justify-center h-screen sm:flex sm:items-center sm:justify-center sm:h-screen md:flex md:items-center md:justify-center md:h-screen flex-col items-center sm:w-1/2 md:flex-col md:items-center">
                    <h1 className="text-3xl font-semibold w-full text-center uppercase md:text-3xl md:font-semibold sm:text-center md:uppercase">Book your car now</h1>
                    <p className="text-lg w-full text-center">We rent you well-maintained cars for your comfort at the best prices.</p>
                    <button className="btn btn-border uppercase border mt-5 border-black py-2 px-4 sm:text-center md:py-2 md:px-4 md:mt-5 " onClick={goto}><span>browse</span></button>
                    <button className="btn btn-border uppercase border mt-5 border-black py-2 px-4 sm:text-center md:py-2 md:px-4 md:mt-5 " onClick={goto}><span>book</span></button>
                </div>
            </div>
        </div>
    )
}