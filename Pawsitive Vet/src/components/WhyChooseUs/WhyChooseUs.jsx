import pug from "../../assets/Images/pug.png";
function WhyChooseUs() {
  return (
    <>
      <div className="py-10">
        <div className="container m-auto">
          <div className="grid grid-cols-2 place-items-center">
            <div className="px-6 ">
              <img src={pug} alt="Pug" className="h-[530px]" />
            </div>
            <div className="mb-10">
              <h2 className="text-4xl font-bold">Why Choose Us ?</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex gap-3 mt-7 items-center justify-center">
                  <div className="flex items-center justify-center rounded-full text-4xl bg-custom_green">
                    <i className="fa-solid fa-stethoscope text-white p-5"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Care Advice</h3>
                    <p className="text-gray-400 mt-3">
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7 items-center justify-center">
                  <div className="flex items-center justify-center rounded-full text-4xl bg-custom_green ">
                  <i className="fa-solid fa-person-military-pointing text-white p-5"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Customer Support</h3>
                    <p className="text-gray-400 mt-3">
                    Far far away, behind the word mountains, far from the countries.
                    </p>
                  </div>
                </div>
              </div>
              {/* second-card */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="flex gap-3 mt-7 items-center justify-center">
                  <div className="flex items-center justify-center rounded-full text-4xl bg-custom_green">
                  <i className="fa-brands fa-servicestack text-white p-5"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Emergency Support</h3>
                    <p className="text-gray-400 mt-3">
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mt-7 items-center justify-center">
                  <div className="flex items-center justify-center rounded-full text-4xl bg-custom_green ">
                  <i className="fa-solid fa-shield-dog text-white p-5"></i>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Veterian Help</h3>
                    <p className="text-gray-400 mt-3">
                      Far far away, behind the word mountains, far from the
                      countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyChooseUs;
