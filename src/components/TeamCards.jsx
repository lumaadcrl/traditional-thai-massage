function TeamCards({ img, name, infos }) {

    return (
        <div className="p-6 text-center w-[350px]">
            <img src={img} alt={name} className="w-full object-cover py-3.5" />
            <h3 className="text-lg font-semibold text-teal-800">{name}</h3>
            <p className="text-sm text-gray-600 py-3.5">{infos}</p>
        </div>
    );
}

export default TeamCards;
