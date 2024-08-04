import molkfood from "../../assets/Images/molkbone.png";
import peanut from "../../assets/Images/Peanut.png";
import triple from "../../assets/Images/Triple.png";
import roster from "../../assets/Images/Rosters.png";
import friskies from "../../assets/Images/Friskies.png";
import temptation from "../../assets/Images/Temptation.png";
function FoodCard() {
  return (
    <>
      <div className="container m-auto">
        <div className="py-11 ">
          <h2 className="text-center text-custom_green text-3xl font-bold mb-3">
            Food Items
          </h2>
          {/* firstrow */}
          <div className="flex gap-10 items-center justify-center">
            {/* firstfoodcard */}
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
              <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                  src={molkfood}
                  alt="molkfood"
                  className="object-cover m-auto"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Milk Bone
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Milk-Bone MaroSnacks Dog Treats, Beef, 40 Ounce with Real Bone
                  Marrow and Calcium
                </p>
              </div>
              <div className="p-6 pt-0">
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
                  src={peanut}
                  alt="Peanut"
                  className="m-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Greenies
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Greenies Pill Pockets for Dogs Capsule Size Natural Soft Dog
                  Treats with Real Peanut Butter, 15.8 oz. Pack (60 Treats)
                </p>
              </div>
              <div className="p-6 pt-0">
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
                  src={triple}
                  alt="triple"
                  className="m-auto object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Good'n'Fun
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Good'n'Fun Triple Flavor 7 inch Rolls, Chews for Dogs, 6 Count
                  (Pack of 1)
                </p>
              </div>
              <div className="p-6 pt-0">
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
                    src={roster}
                    alt="molkfood"
                    className="object-cover m-auto"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Nutrish Savory Roasters
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Nutrish Savory Roasters Real Meat Dog Treats, Roasted Chicken Recipe, 30 Ounce (Pack of 1)
                  </p>
                </div>
                <div className="p-6 pt-0">
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
                    src={friskies}
                    alt="Peanut"
                    className="m-auto object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Friskies
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  Purina Friskies Dry Cat Food, Gravy Swirlers - 22 lb. Bag
                  </p>
                </div>
                <div className="p-6 pt-0">
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
                    src={temptation}
                    alt="triple"
                    className="m-auto object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Temptation Milk
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  TEMPTATIONS MixUps Crunchy and Soft Cat Treats, Surfer's Delight Flavor, 30 oz. Tub (Packaging may vary)
                  </p>
                </div>
                <div className="p-6 pt-0">
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
export default FoodCard;
