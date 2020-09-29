import React from 'react'
import { faMapMarkerAlt, faEnvelope, faPhone, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
    return (
        <div>
            {/* Footer with contact info */}
            <footer className="text-gray-800 mt-16 mb-4">
                <div className="flex items-center justify-center w-screen pt-4">
                    <div className="flex flex-col items-center justify-center w-screen ">
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                        <p className="text-xs mt-2 items-center justify-center">Bangalore</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-screen ">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p className="text-xs mt-2 ">abc@nowhere.com</p>
                    </div >
                    <div className="flex flex-col items-center justify-center w-screen ">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <p className="text-xs mt-2 ">1234567890</p>
                    </div>
                </div>
                <div className="flex justify-center w-screen items-center pt-8 pb-2">
                    <FontAwesomeIcon className="mr-2" icon={faCopyright} size="sm" />
                    <p className="font-semibold text-lg">NEHA BHARATI 2020</p>
                </div>
            </footer>
        </div>
    )
}

export default Contact