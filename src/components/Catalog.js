import React from 'react'
import cars from './cars'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setCurrentCar, getCarProfile } from '../redux/car/actions';

function Catalog(props) {
    return (
        <div className="flex flex-wrap bg-gray-100 text-gray-900 antialiased text-gray-800">
            {/* Modular cards for each car available */}
            {cars.map(car => (
                <div className="px-2  flex flex-col sm:flex sm:flex-row my-6 px-4 md:w-1/2 lg:p-6" >
                    <div className="shadow-2xl ">
                        <img src={car.image} alt={car.description} />
                    </div>
                    <div className="p-2 shadow-2xl cursor-pointer  bg-white">
                        <div className="text-center">
                            <h1 className=" mx-2 text-lg sm:mx-4 md:mx-4 md:mt-1 font-semibold ">{car.description}</h1>
                            <h1 className="pt-1  mx-2 text-xs sm:mx-4 sm:-mt-2 sm:pb-2 md:mx-4">₹{car.rate_per_day}/day</h1>
                        </div>
                        <div className="flex flex-col">
                            <Link to="/order" className=" mx-2 my-2 text-center hover:text-white" >
                                <button type="button" id="button" className="bton fifth px-6  " onClick={props.setCar(car.id)} >Details</button>
                            </Link>
                            <Link to="/booking" className=" mx-2 my-2 text-center  hover:text-white">
                                <button type="button" id="button" className="bton fifth px-8 " >Book</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}


function mapStateToProps(state) {
    return {
        id: state.id
    }
}

const mapDispatchToProps = dispatch => ({
    setCar(id) {
        return () => {
            dispatch(setCurrentCar(id));
            dispatch(getCarProfile(id + 1));
        };
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
