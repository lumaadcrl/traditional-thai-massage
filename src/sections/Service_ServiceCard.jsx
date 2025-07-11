import Button_Service from "./Service_ServiceBtn";

function Home_ServiceCard({ title, description, price }) {

  return (
    <div className="p-4">
        <h3 className="font-bold font-serif text-3xl py-3.5 text-[#205C4A]">{title}</h3>
        <p className="font-sans text-sm py-2 text-gray-600">{description}</p>
        <p className="font-sans font-bold py-2.5 text-[#205C4A]">{price}</p>
        <Button_Service name="call now"/>
    </div>
  );
}


export default Home_ServiceCard