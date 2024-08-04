import royalcanin from "../../assets/Images/royalcanin.png";
import bluebuffalo from "../../assets/Images/bluebuffalo.png";
import tasteofwild from "../../assets/Images/tasteofwild.png";
import acana from "../../assets/Images/acana.png";
import petfirst from "../../assets/Images/petfirst.png";
import petwatch from "../../assets/Images/24petwatch.png";


function OurPartner() {
  return (
    <>
      <div className="py-10 ">
        <div className="container m-auto">
           <div className="partners-head text-center">
           <h2 className="font-bold text-5xl font-custom_font">
                Our Partners
            </h2>
           </div>
          <div className="logos">
            <div className="logos-slide">
              <a href="#">
                <img src={royalcanin} alt="esewa" />
              </a>
              <a href="">
                <img src={bluebuffalo} alt="khalti" />
              </a>
              <a href="">
                <img src={tasteofwild} alt="leapfrog" />
              </a>
              <a href="#">
                <img src={acana} alt="ratnagiri" />
              </a>
              <a href="">
                <img src={petfirst} alt="solti" />
              </a>
              <a href="#">
                <img src={petwatch} alt="cotiviti" />
              </a>
            </div>
            <div className="logos-slide">
              <a href="#">
                <img src={royalcanin} alt="esewa" />
              </a>
              <a href="">
                <img src={bluebuffalo} alt="khalti" />
              </a>
              <a href="">
                <img src={tasteofwild} alt="leapfrog" />
              </a>
              <a href="#">
                <img src={acana} alt="ratnagiri" />
              </a>
              <a href="">
                <img src={petfirst} alt="solti" />
              </a>
              <a href="#">
                <img src={petwatch} alt="cotiviti" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurPartner;
