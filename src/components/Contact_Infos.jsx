function Contact_Infos({ icon, title, description }) {

  return (
    <div className="flex items-start gap-3">
        <div>
            <div className="flex items-center gap-2.5 text-[#205C4A] font-serif py-2.5">
                <i className={`${icon}`}></i>
                <h4 className="font-semibold uppercase">{title}</h4>
            </div>
            <p className="font-sans pl-7 whitespace-pre-line">{description}</p>
        </div>
    </div>
  );
}

export default Contact_Infos;
