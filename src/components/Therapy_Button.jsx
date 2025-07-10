import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Therapy_Button(){

    return(
        <Link to="/contact" className="uppercase cursor-pointer py-1 underline">
            call now ➔
        </Link>
    );
}

export default Therapy_Button