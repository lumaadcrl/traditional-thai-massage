function Expertise_Card(props) {
  return (
    <div>
      <div className="flex-wrap p-2 text-center sm:text-left sm:flex sm:flex-col sm:items-start">
        <img
          src={props.icon}
          alt="icons"
          className="w-[50px] mx-auto sm:mx-0 py-2.5"
        />
        <h3 className="text-2xl font-bold font-serif text-[#205C4A] py-2">
          {props.title}
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Expertise_Card;
