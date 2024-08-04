import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Proffesional from "../../components/Proffesional/Proffesional";
import Feedback from "../../components/Feedback/Feedback";
import SwiperJS from "../../components/SwiperJS/SwiperJS";
import Gallery from "../../components/Gallery/Gallery";
import LatestNews from "../../components/LatestNews/LatestNews";
import OurPartner from "../../components/OurPartner/OurPartner";
import FAQ from "../../components/FAQ/Faq";


function Home (){
    return(
        <>
        <Banner></Banner>
        <Card></Card>
        <WhyChooseUs></WhyChooseUs>
        <Proffesional></Proffesional>
        <FAQ></FAQ>
        <SwiperJS></SwiperJS>
        <Gallery></Gallery>
        <LatestNews></LatestNews>
        <OurPartner></OurPartner>
        </>
    )
}
export default Home;