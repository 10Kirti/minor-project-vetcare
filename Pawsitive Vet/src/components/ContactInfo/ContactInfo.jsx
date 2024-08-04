function ContactInfo (){
    return(
        <>
            <div className="py-12">
        <div className="container mx-auto">
          <div className="contact-container flex px-28 justify-between">
            <div className="basis-[30%] contact-info">
              <div className="bg-custom_light_blue p-8 shadow-lg  ">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold px-4 text-gray-600">
                    Get Appointment starting a New Project?
                  </h3>
                  <div className="flex items-center">
                    <i className="las la-map-marker-alt text-2xl mr-3"></i>
                    <div>
                      <i className="bi bi-geo-alt-fill text-xl text-custom_green"></i>
                      <h6 className="font-semibold mt-2">Address</h6>
                      <p className="mt-1">Pepsicola, Kathmandu, Nepal</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="las la-phone text-2xl mr-3"></i>
                    <div>
                      <i className="bi bi-telephone-fill text-xl text-custom_green"></i>
                      <h6 className="font-semibold mt-2">Phone</h6>
                      <p className="mt-1">Mobile: +01-937492</p>
                      <p className="mt-1">Hotline: +1235678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="las la-envelope text-2xl mr-3 "></i>
                    <div>
                      <i className="bi bi-envelope-fill text-xl text-custom_green"></i>
                      <h6 className="font-semibold mt-2">Mail</h6>
                      <p className="mt-1">support@Pawsitive.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" basis-[60%] contact-form">
              <div className="mb-8 title">
                <h6 className="text-lg font-medium">Let's Get In Touch</h6>
                <h2 className="text-5xl font-bold mb-4 mt-4">Send Us a Message</h2>
                <p>
                  Please put up a topic below related to your inquiry. If you
                  don't find what you need, fill out our contact form. For all
                  enquiries, please mail us using the below.
                </p>
              </div>
              <div>
                <form
                  action="assets/inc/sendemail.php"
                  className="space-y-6"
                >
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-2 mt-4">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="Subject"
                        className="w-full p-3 border rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Write a Message"
                      className="w-full p-3 border rounded-lg h-32"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-custom_green hover:bg-custom-pink text-white px-6 py-3 rounded-lg"
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default ContactInfo;