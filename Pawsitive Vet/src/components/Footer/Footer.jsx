function Footer (){
    return(
        <>
            <div className="bg-custom_balck py-10">
                <div className="container m-auto">
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-white  text-2xl font-bold heading">Pawsitive</h2>
                            <p className="text-custom_gray mt-3">
                            A small river named Duden flows by their place and 
                            </p>
                            <p className="text-custom_gray">
                            supplies it with the necessary regelialia.
                            </p>
                            <ul className="flex items-center justify-center gap-8 mt-5">
                                <li>
                                <a href="https://www.facebook.com/dikshya.shrestha.3192"><i className="bi bi-facebook text-custom_green text-3xl"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/sana_b_e_e/"> <i className="bi bi-instagram text-custom_green text-3xl"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-twitter text-custom_green text-3xl"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-5">
                        <h2 className="text-white  text-2xl font-bold heading">Quick Links</h2>
                        <ul className="text-custom_gray text-xl">
                            <li className="mt-5"><a href="#"><i className="bi bi-chevron-right"></i>Home</a></li>
                            <li className="mt-5"><a href="#"><i className="bi bi-chevron-right"></i>About</a></li>
                            <li className="mt-5"><a href="#"><i className="bi bi-chevron-right"></i>Blog</a></li>
                            <li className="mt-5"><a href="#"><i className="bi bi-chevron-right"></i>Veterinarian</a></li>
                            <li className="mt-5"><a href="#"><i className="bi bi-chevron-right"></i>Contact</a></li>
                        </ul>
                        </div>
                        <div className="ml-5">
                        <h2 className="text-white  text-2xl font-bold heading">Have A Question ?</h2>
                        <p className="text-custom_gray font-semibold mt-6">
                        203 Fake St. Mountain View, San Francisco, California, USA
                        </p>
                        <p className="text-custom_gray mt-6">
                        +2 392 3929 210
                        </p>
                        <p className="text-custom_gray mt-6">
                        info@yourdomain.com
                        </p>
                        </div>
                    </div>
                    <p className="text-center text-custom_gray font-normal text-lg mt-6">
                    Copyright ©2024 All rights reserved | This  is made with &#9829; by : <span className="inline-block font-bold text-custom_green">Kirti Kandel, Dikshya Shrestha & Richa Mishra</span>
                    </p>
                </div>
            </div>

        </>
    )
}
export default Footer;