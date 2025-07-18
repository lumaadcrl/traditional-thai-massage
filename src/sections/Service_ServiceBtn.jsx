import { Link } from 'react-router-dom';

function Service_ServiceBtn(props){

    return(
        <Link to="/contact" className="flex font-sans font-bold py-2.5 text-[#205C4A] uppercase gap-2.5 cursor-pointer">
            <h2>{props.name}</h2>
            <i class='bx bx-right-arrow-alt text-2xl'></i>
        </Link>
    );
}

export default Service_ServiceBtn