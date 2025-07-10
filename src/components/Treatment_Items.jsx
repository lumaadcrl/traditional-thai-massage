function Threatment_Item(props){
    
    return(
        <div className="py-6">
            <p className="font-bold py-2 text-[#205C4A]">0{props.number}</p>
            <h4 className="font-bold font-serif text-2xl py-2 text-[#205C4A]">{props.title}</h4>
            <p className="font-sans text-sm py-2">{props.description}</p>
        </div>
    )
}

export default Threatment_Item