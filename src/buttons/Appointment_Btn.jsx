import { Link } from 'react-router-dom';

function Appointment_Btn(props){

    return(
        <Link to="/contact"className="uppercase text-white px-6 py-2 text-[16px] sm:text-[18px] bg-[#205C4A] duration-200">
            call an appointment  ➔
        </Link> 
    );
}

export default Appointment_Btn