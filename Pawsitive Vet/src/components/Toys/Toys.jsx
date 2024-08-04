import bene from "../../assets/Images/Benebone.png";
import hound from "../../assets/Images/Hound.png";
import dina from "../../assets/Images/Dina.png";
import dogball from "../../assets/Images/dogball.png";
import mountain from "../../assets/Images/catmountain.png";
import indoorcats from "../../assets/Images/indoorcats.png";
function Toys() {
  return (
    <>
      <div className="container m-auto">
        <div className="py-11 ">
          <h2 className="text-center text-custom_green text-3xl font-bold mb-3">
            Pet Toy
          </h2>
          {/* firstrow */}
          <div className="flex gap-10 items-center justify-center">
            {/* firstfoodcard */}
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={bene}
                  alt="molkfood"
                  className="object-cover m-auto"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Benebone
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Benebone Medium 4-Pack Dog Chew Toys for Aggressive Chewers, Made in USA, 60lbs and Under
                </p>
              </div>
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            {/* secondfoodcard */}
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={dina}
                  alt="Peanut"
                  className="m-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Dinos Bruto 
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                goDog Checkers Just for Me Dinos Bruto Squeaky Plush Dog Toy, Chew Guard Technology - Purple, Mini
                </p>
              </div>
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            {/* thirdfoodcard */}
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={dogball}
                  alt="triple"
                  className="m-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Dog Ball
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                2 Pack Dog Toy Balls Upgraded Indestructible Dog Tennis Ball Aggressive Chewers Dog Toys for Medium Large Dogs
                </p>
              </div>
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Buy Now
                </button>
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
          {/* 2ndrow */}
          <div className="mt-10">
            <div className="flex gap-10 items-center justify-center">
              {/* firstfoodcard */}
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={hound}
                    alt="molkfood"
                    className="object-cover m-auto"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Outward Hound
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Outward Hound Squeaker Ballz Fetch Dog Toy, Small, 8- Pack
                  </p>
                </div>
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Buy Now
                  </button>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* secondfoodcard */}
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={mountain}
                    alt="Peanut"
                    className="m-auto object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Catstages
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Catstages Chase Meowtain Interactive 4-Tier Cat Track Toy
                  </p>
                </div>
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Buy Now
                  </button>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              {/* thirdfoodcard */}
              <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={indoorcats}
                    alt="triple"
                    className="m-auto object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Exercise Balls
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Cat Toys, Cat Toys for Indoor Cats,Interactive Kitten Toys Roller Tracks with Catnip Spring Pet Toy with Exercise Balls
                  </p>
                </div>
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Buy Now
                  </button>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-custom_green text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Toys;
