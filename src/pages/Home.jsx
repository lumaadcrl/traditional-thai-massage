import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero_Sections from "../sections/Home_Hero.jsx"
import Exp_Sections from "../sections/Home_Expertise.jsx"
import Services from "../sections/Home_Services.jsx"
import Appointment from "../sections/Home_Appointment.jsx"
import Therapy from "../sections/Home_Therapy.jsx"
import Testimony from "../sections/Home_Testimony.jsx"
import Contact from "../sections/Home_Contact.jsx"

function Home(){

    return(
        <>
            <Header/>
            <Hero_Sections/>
            <Exp_Sections/>
            <Services/>
            <Appointment/>
            <Therapy/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home