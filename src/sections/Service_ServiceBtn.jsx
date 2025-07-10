function Service_ServiceBtn(props){

    return(
        <button className="flex font-sans font-bold py-2.5 text-[#205C4A] uppercase gap-2.5 cursor-pointer">
            <h2>{props.name}</h2>
            <i class='bx bx-right-arrow-alt text-2xl'></i>
        </button>
    );
}

export default Service_ServiceBtn