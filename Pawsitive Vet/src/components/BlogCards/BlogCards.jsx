import dogwalking from "../../assets/Images/dogwalking.png";
import catgrooming from "../../assets/Images/catgrooming.png";
import sexycat from "../../assets/Images/sexycat.png";
import posingcat from '../../assets/Images/posingcat.png';
import doggang from '../../assets/Images/doggang.png';
import dogandcat from '../../assets/Images/dogandcat.png';
import { Link } from "react-router-dom";
function BlogCards (){
    return(
        <>
            <div className="py-24 bg-custom_gray" data-aos="fade-down-right">
        <div className="container w-[90%] m-auto">
          <h2 className="text-center font-bold font-custom_font text-4xl">
            Latest News From Our Blog
          </h2>
          <div className="flex items-center justify-between mt-20">
            {/* firstcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={dogwalking} alt="dog walking" />
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                <Link to="FirstBlog" className="hover:text-custom_green">Even the all-powerful Pointing has no control about the
                blind texts</Link>
                </p>
              </div>
            </div>
            {/* secondcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={catgrooming} alt="dog walking" />
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                <Link to="secondblog" className="hover:text-custom_green">Pet Nutrition: Balanced Diets for Different Animals</Link>
                </p>
              </div>
            </div>
            {/* thirdcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={sexycat} alt="dog walking" />
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                <Link to="thirdblog" className="hover:text-custom_green">Understanding Pet Behavior and Mental Health</Link>
                </p>
              </div>
            </div>
          </div>
          {/* second-row  */}
          <div className="flex items-center justify-between mt-20">
            {/* firstcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={dogwalking} alt="dog walking"/>
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                  <Link to="forthblog" className="hover:text-custom_green"> Vaccination Schedules and Their Importance</Link>
                </p>
              </div>
            </div>
            {/* secondcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={dogandcat} alt="dog walking" className="h-[290px]" />
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                <Link to="fifthblog" className="hover:text-custom_green">Senior Pet Care: How to Support Aging Animals</Link>
                </p>
              </div>
            </div>
            {/* thirdcard  */}
            <div className="rounded-lg shadow-lg w-[450px]">
              <img src={doggang} alt="dog walking" className="h-[290px]"/>
              <div className="px-5 py-5 text-center">
                <span className="text-gray-400 text-xl font-semibold">
                  APRIL 07, 2020 ADMIN{" "}
                  <i className="bi bi-chat-fill text-custom_green"></i> 3
                </span>
                <p className="text-xl mt-3">
                <Link to="sixthblog" className="hover:text-custom_green">Adopting a Pet: What to Consider and How to Prepare
                </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default BlogCards;