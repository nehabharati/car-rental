import React from 'react'
import {connect} from 'react-redux' 

function Order(props) { 
    return (
        <div className="text-gray-800"> 
            {/* Details of each car */}
            {props.profile.map(pro => 
            { return (
                <div className="mt-16 p-6 md:p-10">
                    <div className="shadow-md p-4 lg:flex">
                        <img src={pro.image} alt="" />
                        <div className="lg:mx-4 xl:mx-10">
                            <h1 className="text-lg font-semibold mt-2">Name: <span className="text-lg font-normal mt-2">{pro.name}</span></h1>
                            <h1 className="text-lg font-semibold mt-2">Brand: <span className="text-lg font-normal mt-2">{pro.description}</span></h1>
                            <h1 className="text-lg font-semibold mt-2">Color: <span className="text-lg font-normal mt-2">{pro.color}</span></h1>
                            <h1 className="text-lg font-semibold mt-2">Vehicle number: <span className="text-lg font-normal mt-2">{pro.vehicle_number}</span></h1>
                            <h1 className="text-lg font-semibold mt-2">Number of seats: <span className="text-lg font-normal mt-2">{pro.seats}</span></h1>
                            <h1 className="text-lg font-semibold mt-2">Rate per day: <span className="text-lg font-normal mt-2">₹{pro.rate_per_day}</span></h1>
                        </div>
                    </div>
                </div>)
            })}
           
        </div>
    )
}

function mapStateToProps(state) {
    return { 
        profile:state.cars
    }
}

export default connect(mapStateToProps)(Order)
 