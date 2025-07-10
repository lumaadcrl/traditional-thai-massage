import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Appointment_Btn(props){

    return(
        <Link to="/contact"className="uppercase text-black bg-white px-6 py-2 text-[16px] sm:text-[18px] duration-200">
            call an appointment  ➔
        </Link> 
    );
}

export default Appointment_Btn