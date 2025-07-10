import Therap_Button from '../components/Therapy_Button.jsx'

function Therapy_Cards(props){

    return(
        <div className='border border-gray-200 rounded-md p-3 flex-wrap'>
            <p className='font-bold py-2'>{props.number}</p>
            <h3 className='font-bold font-serif text-2xl py-2'>{props.title}</h3>
            <p className='font-sans text-sm py-2'>{props.description}</p>
            <p className='font-sans font-bold py-2.5'>{props.price}</p>
            <Therap_Button/>
        </div>
    );
}

export default Therapy_Cards