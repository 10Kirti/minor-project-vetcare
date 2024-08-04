function Card() {
  return (
    <>
      <div className="bg-custom_gray py-16">
        <div className="container m-auto">
          <div className="grid grid-cols-3 gap-x-8">
            <div className="py-5 relative shadow-2xl bg-white rounded-md card-hover">
              <div className="absolute top-[-37px] left-[43%]  bg-custom_gray p-3 rounded-full text-white  text-6xl">
                <i className="bi bi-person-walking text-custom_green"></i>
              </div>
              <div className="text-center px-6 py-5 mt-10">
                <h2 className="text-2xl text-black font-bold">Dog Walking</h2>
                <p className="text-xl text-gray-400 mt-4">
                Dog walking is an essential activity for your canine companion's physical and mental health. It provides much-needed exercise, helping to maintain a healthy weight and strong muscles. 

                </p>
              </div>
            </div>
            <div className="py-5 relative shadow-2xl bg-white rounded-md">
              <div className="absolute top-[-37px] left-[43%]  bg-custom_gray p-3 rounded-full text-white  text-6xl">
                <i className="bi bi-egg-fried text-custom_green"></i>
              </div>
              <div className="text-center px-6 py-5 mt-10">
                <h2 className="text-2xl text-black font-bold">Pet Daycare</h2>
                <p className="text-xl text-gray-400 mt-4">
                Pet day care offers a safe, engaging environment for pets while their owners are away. It provides socialization with other animals, regular exercise, and mental stimulation through various activities. 
                </p>
              </div>
            </div>
            <div className="py-5 relative shadow-2xl bg-white rounded-md">
              <div className="absolute top-[-37px] left-[43%]  bg-custom_gray p-3 rounded-full text-white  text-6xl">
                <i className="bi bi-scissors text-custom_green"></i>
              </div>
              <div className="text-center px-6 py-5 mt-10">
                <h2 className="text-2xl text-black font-bold">Pet Grooming</h2>
                <p className="text-xl text-gray-400 mt-4">
                Pet day care offers a safe, engaging environment for pets while their owners are away. It provides socialization with other animals, regular exercise, and mental stimulation through various activities. 

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
