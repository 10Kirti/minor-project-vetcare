import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <div className="shadow-md">
                <div className="container m-auto">
                        <div className="flex items-center justify-between">
                            <div> 
                                <h1 className="font-bold text-3xl">Pawsitive</h1>
                                
                            </div>
                            <ul className=" font-semibold text-xl flex items-center justify-center gap-12">
                                    <li className="py-8 nav-link"><Link to="/">HOME</Link></li>
                                    <li className="nav-link py-8">
                                    <Link to="/about-us">ABOUT US</Link>
                                    </li>
                                    <li className="nav-link py-8">
                                    <Link to="/services">SERVICES</Link>
                                    </li>
                                    <li className="nav-link py-8"><Link to="/veterinarian">VETERINARIAN</Link></li>
                                    <li className="nav-link py-8"><Link to="/blog">BLOG</Link></li>
                                    <li className="nav-link py-8">
                                    <Link to="/contact">CONTACT</Link>
                                    </li>
                            </ul>
                            <div className="flex gap-8">
                                <button className="p-5 font-medium text-lg bg-custom_green text-white rounded-md">
                                <Link to="/login">Login</Link>
                                </button>
                                <button className="px-3 font-medium text-lg bg-custom_green text-white rounded-md">
                                <Link to="/signup">Sign Up</Link>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}
export default Header;