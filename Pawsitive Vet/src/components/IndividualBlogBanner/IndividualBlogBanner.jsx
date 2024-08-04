import { Link } from "react-router-dom";
function IndividualBlogBanner() {
  return (
    <>
      <div className="about-gradient-background">
        <div className="z-20 text-4xl grid place-items-center font-extrabold relative top-[40%]">
          <ul className="breadcrumbs flex font-custom_font text-white">
          <li className="breadcrumbs-items">
              <Link to="/">HOME</Link>
            </li>
            <li className="breadcrumbs-items">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="breadcrumbs-items-link-active">
              <a href="#">BLOG DETAILS</a>
            </li>
          </ul>
        </div>
        <div className="color-overlay"></div>
      </div>
    </>
  );
}
export default IndividualBlogBanner;
