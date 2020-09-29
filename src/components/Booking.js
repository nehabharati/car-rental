import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [errorMessage, setErrorMessage] = useState('')
    const [nameErrorMessage, setNameErrorMessage] = useState('')
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')

    const handleName = (e) => setName(e.target.value)

    function handleSubmit(e) {
        e.preventDefault()
        if (endDate <= startDate) {
            setErrorMessage("Return Date cannot be less than Issue date")
            return false
        }
        if (name === "") {
            setNameErrorMessage("Please fill the empty field")
            return false
        }
        else {
            setErrorMessage("")
            setNameErrorMessage("")
            setShow(!show)
        }

    }

    return (
        <div className="flex px-8 flex-col sm:flex-row sm:items-center items-center justify-center h-screen text-gray-800">
            <img className="w-1/2 mb-4 hidden sm:block sm:w-3/5 sm:-ml-20 sm:h-full sm:object-cover  sm:mb-0 md:w-1/2 md:object-cover  lg:w-1/2 lg:object-cover lg:-ml-32" src={require("../images/steer.jpg")} alt="book now" />

            <div className="w-full px-4 shadow-md border sm:w-1/2 sm:border-none sm:ml-2 md:w-1/3 md:ml-16 lg:w-1/3 lg:ml-20">
                <h1 className="text-lg font-semibold text-center mt-8">Booking details</h1>
                <form id="myForm" className="flex flex-col items-start w-full py-10 px-6 md:px-4" onSubmit={handleSubmit} name="certform">
                    <label>Name</label>
                    <input className="px-2 mb-6 w-full my-2 border-b-2 border-black" type="text" placeholder="John Doe" onChange={handleName} />
                    {nameErrorMessage ? (<small id="nameErr" className="pb-2 -mt-6 text-red-600"></small>) : null}
                    <label>Phone Number</label>
                    <div className="flex">
                        <input type="text" className="w-1/6 pl-2 mb-6 bg-white border-b-2 border-black" disabled value="+91" />
                        <input className="px-2 mb-6 w-full my-2 border-b-2 border-black pb-2" type="tel" id="phone" pattern="^\d{10}$" required="required" placeholder="Phone number" />
                        <small id="tel"></small>
                    </div>
                    <label htmlFor="start">Issue Date</label>
                    <DatePicker id="date" className="z-50 px-2 mb-6 cursor-pointer w-full my-2 border-b-2 border-black pr-24 md:pr-12 lg:pr-48" selected={startDate} onChange={date => setStartDate(date)} />
                    <label>Return Date</label>
                    <DatePicker id="date" className="z-50 px-2 mb-6 cursor-pointer w-full my-2 border-b-2 border-black  pr-24  md:pr-12 lg:pr-48" selected={endDate} onChange={date => setEndDate(date)} />
                    {errorMessage ? (<small id="error" className="pb-2 -mt-6 text-red-600"></small>) : null}
                    <button type="submit" className="bton fifth uppercase border self-center mt-10 border-black px-4 py-1">Book</button>
                </form>
            </div>

            <div style={{ display: show ? "block" : "none" }} className="modal hidden fixed z-10 pt-10 left-0 top-0 mt-10 w-full h-screen">
                <div className="modalAnimate relative bg-black text-white text-center mt-16 p-2 m-auto pb-32 pr-10 pl-10 pt-10 shadow-lg w-1/2 rounded">
                    <span id="close" className="close float-right text-2xl sm:text-4xl font-bold hover:text-gray-400 cursor-pointer" onClick={() => window.location = "/"}>&times;</span>
                    <h2 className="text-2xl sm:text-4xl text-center mt-10">Your booking is confirmed!</h2>
                </div>
            </div>
        </div>
    )
}

export default Booking