import dogwalking from "../../assets/Images/dogwalking.png";
import catgrooming from "../../assets/Images/catgrooming.png";
import sexycat from "../../assets/Images/sexycat.png";
function LatestNews() {
  return (
    <>
      <div className="py-24 bg-custom_gray">
        <div className="container m-auto">
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
                  <a href="#" className="hover:text-custom_green">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
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
                  <a href="#" className="hover:text-custom_green">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
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
                  <a href="#" className="hover:text-custom_green">
                    Even the all-powerful Pointing has no control about the
                    blind texts
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LatestNews;
